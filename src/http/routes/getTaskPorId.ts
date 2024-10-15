import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { getTaskPorId } from "../../functions/getTaskPorId";

export const getTaskPorIdRoute: FastifyPluginAsyncZod = async (app) => {
  app.get<{ Params: { id: string } }>(
    "/getTasks/:id",
    async (request, reply) => {
      const id = request.params.id; // Captura o ID da URL
      const task = await getTaskPorId(id);

      if (!task) {
        return reply.status(404).send({ message: "Task not found" });
      }

      return reply.send(task);
    }
  );
};
