import { z } from "zod";
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { createUser } from "../../functions/createUser";

export const createUserRoute: FastifyPluginAsyncZod = async (app) => {
  app.post(
    "/signup",
    {
      // fazendo validação do body
      schema: {
        body: z.object({
          name: z.string(),
          email: z.string(),
          password: z.string(),
        }),
      },
    },
    async (request, reply) => {
      const { name, email, password }: any = request.body;
      const newUser = await createUser({
        name,
        email,
        password,
      });

      reply.status(201).send(newUser);
    }
  );
};
