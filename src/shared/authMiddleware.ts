import { FastifyReply, FastifyRequest } from "fastify";
import jwt from "jsonwebtoken";

export async function authMiddleware(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      return reply.status(401).send({ error: "Token não fornecido" });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      return reply.status(401).send({ error: "Token malformado" });
    }

    // Verifica e decodifica o token
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      id: string;
    };

    // Adiciona o id do usuário diretamente na requisição como um objeto anônimo
    request["user"] = { id: decoded.id }; // O tipo não é verificado, mas funciona
  } catch (error) {
    return reply.status(401).send({ error: "Token inválido ou expirado" });
  }
}
