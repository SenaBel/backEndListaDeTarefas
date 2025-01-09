import { db } from "../db";
import { user } from "../db/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET; // Use um segredo seguro em produção

export interface IUserCredentials {
  email: string;
  password: string;
}

export interface IUserReturn {
  id: string;
  name: string;
  email: string;
}

export async function authenticateUser({ email, password }: IUserCredentials) {
  // Verificar se o usuário existe
  const existingUser = await db
    .select()
    .from(user)
    .where(eq(user.email, email))
    .limit(1);

  if (existingUser.length === 0) {
    throw new Error("E-mail inválida, verifique!");
  }

  const userRecord = existingUser[0];

  // Verificar a senha
  const passwordMatch = await bcrypt.compare(password, userRecord.password);
  if (!passwordMatch) {
    throw new Error("Senha inexistente ou inválida, verifique!");
  }

  // Criar o token JWT
  const token = jwt.sign({ id: userRecord.id }, JWT_SECRET, {
    expiresIn: "1h",
  });

  const userReturn: IUserReturn = {
    id: userRecord.id,
    name: userRecord.name,
    email: userRecord.email,
  };

  return { token, user: userReturn };
}
