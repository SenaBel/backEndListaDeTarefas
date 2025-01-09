import { z } from "zod";
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { authenticateUser } from "../../functions/authenticateUser";

export const authRoute: FastifyPluginAsyncZod = async (app) => {
  app.post(
    "/login",
    {
      schema: {
        body: z.object({
          email: z.string(),
          password: z.string(),
        }),
      },
    },
    async (request, reply) => {
      const { email, password }: any = request.body;

      try {
        const data = await authenticateUser({ email, password });
        reply.send({ data });
      } catch (error) {
        reply.status(401).send({ message: error.message });
      }
    }
  );
};
