import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { deleteTask } from "../../functions/deleteTask";

export const deleteTaskRoute: FastifyPluginAsyncZod = async (app) => {
  app.delete<{
    Params: { id: string }; //elizkanep69csscfvkydovnv
  }>("/deleteTask/:id", async (request, reply) => {
    const { id } = request.params; // Captura o ID como string

    const result = await deleteTask(id);

    if (result.length === 0) {
      return reply.status(404).send({ message: "Task not found" });
    }

    return reply.send({ message: "Task deleted successfully" });
  });
};
