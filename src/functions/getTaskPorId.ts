import { db } from "../db";
import { tasks } from "../db/schema";
import { eq } from "drizzle-orm"; // Dependendo da lib que está utilizando, essa função pode ser diferente.

export async function getTaskPorId(id: string) {
  const result = await db.select().from(tasks).where(eq(tasks.id, id)); // Filtra pelo ID

  const task = result[0]; // Pega a primeira (e única) tarefa encontrada
  return task;
}
