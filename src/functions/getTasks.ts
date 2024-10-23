import { db } from "../db";
import { tasks } from "../db/schema";
import { desc, asc } from "drizzle-orm";

export async function getTask() {
  const result = await db
    .select()
    .from(tasks)
    .orderBy(asc(tasks.created_at))
    .execute();

  return result;
}
