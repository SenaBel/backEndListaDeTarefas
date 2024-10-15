import { db } from "../db";
import { tasks } from "../db/schema";

interface ITaskRequest {
  title: string;
  description: string;
  isCompleted: boolean;
}

export async function createTask({
  title,
  description,
  isCompleted,
}: ITaskRequest) {
  const result = await db
    .insert(tasks)
    .values({ title, description, isCompleted })
    .returning();

  const task = result[0];
  return { task };
}
