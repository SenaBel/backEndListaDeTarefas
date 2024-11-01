// import { FastifyPluginAsync } from "fastify";
// import { meGetUserToken } from "../../functions/meGetUserToken";

// export const meRoute: FastifyPluginAsync = async (app) => {
//   app.get("/me", async (request, reply) => {
//     try {
//       // Extrai o token do cabeçalho de autorização
//       const authHeader = request.headers.authorization;
//       if (!authHeader) {
//         return reply.status(401).send({ error: "Token não fornecido" });
//       }

//       const token = authHeader.split(" ")[1]; // Pega o token após "Bearer"
//       if (!token) {
//         return reply.status(401).send({ error: "Token inválido" });
//       }

//       // Busca o usuário com base no token
//       const user = await meGetUserToken(token);

//       // Retorna as informações do usuário
//       reply.status(200).send({ user });
//     } catch (error) {
//       console.error("Erro de autenticação:", error);
//       reply.status(401).send({ error: "Não autorizado" });
//     }
//   });
// };

import { FastifyPluginAsync } from "fastify";
import { meGetUserToken } from "../../functions/meGetUserToken";
import { authMiddleware } from "../../shared/authMiddleware";

export const meRoute: FastifyPluginAsync = async (app) => {
  app.get(
    "/me",
    {
      preHandler: authMiddleware,
    },
    async (request, reply) => {
      try {
        // Busca o usuário com base no token
        const user = await meGetUserToken(request);

        // Retorna as informações do usuário
        reply.status(200).send({ user });
      } catch (error) {
        console.error("Erro de autenticação:", error);
        reply.status(401).send({ error: "Não autorizado" });
      }
    }
  );
};
