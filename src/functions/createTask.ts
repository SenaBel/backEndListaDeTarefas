import { db } from "../db";
import { tasks } from "../db/schema";
import { eq } from "drizzle-orm";

interface ITaskRequest {
  title: string;
  description: string;
  isCompleted: boolean;
}

function normalizeTitle(title: string): string {
  return title.trim().toLowerCase(); // Remove espaços em branco e converte para minúsculas
}

export async function createTask({
  title,
  description,
  isCompleted,
}: ITaskRequest) {
  const normalizedTitle = normalizeTitle(title); // Normaliza o título

  // Verificar se já existe uma tarefa com o mesmo título normalizado
  const existingTask = await db
    .select()
    .from(tasks)
    .where(eq(tasks.title, normalizedTitle)) // Compara com o título normalizado
    .limit(1); // Pega apenas a primeira ocorrência

  if (existingTask.length > 0) {
    throw new Error("Já existe uma tarefa com este titulo, VERIFIQUE!");
  }

  const result = await db
    .insert(tasks)
    .values({ title, description, isCompleted })
    .returning();

  const task = result[0];
  return { task };
}
