import { FastifyPluginAsync } from "fastify";

export const signoutRoute: FastifyPluginAsync = async (app) => {
  app.post("/signout", async (request, reply) => {
    try {
      reply.status(200).send({ message: "Logout realizado com sucesso" });
    } catch (error) {
      console.error("Erro ao realizar logout:", error);
      reply.status(500).send({ error: "Erro no servidor" });
    }
  });
};
