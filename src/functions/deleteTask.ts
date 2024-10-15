import { db } from "../db";
import { tasks } from "../db/schema";
import { eq } from "drizzle-orm"; // Confirme que essa função é a correta para sua ORM

export async function deleteTask(id: string) {
  const result = await db
    .delete(tasks)
    .where(eq(tasks.id, id)) // Filtra pelo ID
    .returning(); // Retorna o resultado da deleção

  return result;
}
