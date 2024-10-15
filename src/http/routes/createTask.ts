import { z } from "zod";
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { createTask } from "../../functions/createTask";

export const createTaskRoute: FastifyPluginAsyncZod = async (app) => {
  app.post(
    "/tasks",
    {
      // fazendo validação do body
      schema: {
        body: z.object({
          title: z.string(),
          description: z.string(),
          isCompleted: z.boolean(),
        }),
      },
    },
    async (request, reply) => {
      const { title, description, isCompleted }: any = request.body;
      const newTask = await createTask({
        title,
        description,
        isCompleted,
      });

      reply.status(201).send(newTask);
    }
  );
};
