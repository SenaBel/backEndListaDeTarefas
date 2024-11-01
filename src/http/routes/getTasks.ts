import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { getTask } from "../../functions/getTasks";
import { authMiddleware } from "../../shared/authMiddleware";

export const getTaskRoute: FastifyPluginAsyncZod = async (app) => {
  app.get(
    "/listTasks",
    { preHandler: authMiddleware },
    async (request, reply) => {
      const tasks = await getTask();
      reply.send(tasks);
    }
  );
};
