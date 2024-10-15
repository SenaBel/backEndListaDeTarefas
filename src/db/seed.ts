import { client, db } from ".";
import { tasks } from "./schema";

async function seed() {
  await db.delete(tasks);

  await db.insert(tasks).values([
    {
      title: "Aprender Node JS",
      description:
        "Mês de Setembro Preciso Ter Um Conhecimento Básico No Backend",
      isCompleted: false,
    },

    {
      title: "Aprimorar os Conhecimentos em React 19",
      description:
        "Fazer Alguns Exercícios Para Entender as Melhorias no React 19",
      isCompleted: false,
    },
    {
      title: "Fazer Projetos no Next JS",
      description: "Fazer Alguns Projetos no Next JS",
      isCompleted: false,
    },
  ]);
}

seed().finally(() => {
  client.end();
});
