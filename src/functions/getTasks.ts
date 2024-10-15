import { db } from "../db";
import { tasks } from "../db/schema";

export function getTask() {
  const result = db.select().from(tasks);

  return result;
}
