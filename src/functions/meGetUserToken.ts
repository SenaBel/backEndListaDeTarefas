// import jwt from "jsonwebtoken";
// import { db } from "../db";
// import { user } from "../db/schema";
// import { eq } from "drizzle-orm";

// const JWT_SECRET = process.env.JWT_SECRET || "123456";

// export async function meGetUserToken(token: string) {
//   try {
//     // Verifica e decodifica o token
//     const decoded = jwt.verify(token, JWT_SECRET) as { id: string };

//     // Busca o usuário no banco de dados com o ID do token decodificado
//     const userResult = await db
//       .select()
//       .from(user)
//       .where(eq(user.id, decoded.id))
//       .limit(1);

//     if (userResult.length === 0) {
//       throw new Error("Usuário não encontrado");
//     }

//     return userResult[0];
//   } catch (error) {
//     console.error("Erro ao verificar o token JWT:", error);
//     throw new Error("Token inválido ou expirado");
//   }
// }

import { FastifyRequest } from "fastify";
import { db } from "../db";
import { user } from "../db/schema";
import { eq } from "drizzle-orm";

export async function meGetUserToken(request: FastifyRequest) {
  const userId = request["user"]?.id; // Acesso à propriedade 'user' com tipo não verificado

  if (!userId) {
    throw new Error("Usuário não encontrado");
  }

  const userResult = await db
    .select()
    .from(user)
    .where(eq(user.id, userId))
    .limit(1);

  if (userResult.length === 0) {
    throw new Error("Usuário não encontrado");
  }

  return userResult[0];
}
