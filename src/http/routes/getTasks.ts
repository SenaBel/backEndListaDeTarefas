import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { getTask } from "../../functions/getTasks";

export const getTaskRoute: FastifyPluginAsyncZod = async (app) => {
  app.get("/listTasks", async (request, reply) => {
    const tasks = await getTask();
    reply.send(tasks);
  });
};
