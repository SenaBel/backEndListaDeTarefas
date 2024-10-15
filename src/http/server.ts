import fastify from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from "fastify-type-provider-zod";
import { createTaskRoute } from "./routes/createTask";
import { getTaskRoute } from "./routes/getTasks";
import { getTaskPorIdRoute } from "./routes/getTaskPorId";
import { deleteTaskRoute } from "./routes/deleteTask";
import fastifyCors from "@fastify/cors";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
  origin: "*",
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createTaskRoute);
app.register(getTaskRoute);
app.register(getTaskPorIdRoute);
app.register(deleteTaskRoute);

app.listen({ port: 3333 }).then(() => {
  console.log("Server running on http://localhost:3333");
});
