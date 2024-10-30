import { db } from "../db";
import { user } from "../db/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcrypt";

interface IUserRequest {
  name: string;
  email: string;
  password: string;
}

function normalizeTitle(name: string): string {
  return name.trim().toLowerCase(); // Remove espaços em branco e converte para minúsculas
}

export async function createUser({ name, email, password }: IUserRequest) {
  const normalizedTitle = normalizeTitle(name); // Normaliza o título

  // Verificar se já existe uma tarefa com o mesmo título normalizado
  const existingUser = await db
    .select()
    .from(user)
    .where(eq(user.name, normalizedTitle)) // Compara com o título normalizado
    .limit(1); // Pega apenas a primeira ocorrência

  if (existingUser.length > 0) {
    throw new Error("Já existe uma tarefa com este titulo, VERIFIQUE!");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("Hashed password:", hashedPassword);

  const result = await db
    .insert(user)
    .values({ name, email, password: hashedPassword })
    .returning();

  const userResult = result[0];
  return { userResult };
}
