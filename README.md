# Projeto de API com Node.js, Fastify, Docker e PostgreSQL

Este projeto é uma API **Lista de Tarefas** construída utilizando Node.js, TypeScript, Docker, PostgreSQL, e Fastify. O objetivo deste projeto é permitir a integração com front-end do repositorio "https://github.com/SenaBel/ListaDeTarefas". Esta api tem com objetivo os seguintes metódos(POST, GET, PUT, DELETE).

## Ferramentas Utilizadas

- **Node.js**: Plataforma para execução de JavaScript no lado do servidor.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática ao código.
- **Fastify**: Framework web rápido e eficiente, utilizado para criação de servidores.
- **Docker**: Ferramenta para criação e gerenciamento de contêineres.
- **PostgreSQL**: Banco de dados relacional utilizado para armazenar os dados da aplicação.
- **Drizzle ORM**: ORM para manipulação de dados no banco de dados.
- **Zod**: Biblioteca para validação de dados.
- **CUID2**: Biblioteca para gerar identificadores únicos.
- **Cors**: Middleware para segurança de acesso entre diferentes origens.

## :floppy_disk: Como rodar?

```bash
git https://github.com/SenaBel/backEndListaDeTarefas
cd backEndListaDeTarefas
```

### 2 - Instalar as dependências

No diretório `backEndListaDeTarefas`, rode o comando `npm install`. Depois de instalar as dependências, verifique as informações abaixo:

- Importante saber que estamos utilizando o **docker**, o mesmo tem que está instalado no ambiente. Executa o comando **docker compose up -d** ver se não dar nenhum erro. da um **sudo docker ps** verifica se está criado.

- Precisa executa o **npx drizzle-kit generate** pra criar as migrations. Pra rodar essa migration e criar a tabela no banco executa **npx drizzle-kit migrate** e pra ver essa tabela no banco executa **npx drizzle-kit studio** clica no link e verifica.

- Se tiver tudo ok:

Em um terminal separado na raiz do projeto, execute: `sudo docker compose up`

- Caso ocorrer esse erro: `Error response from daemon: driver failed programming external connectivity on endpoint lista-de-tarefas-pgsql-1 (2898fe82648423cc0b683f011f89ff21200a399576dda1210d530273d6381f95): failed to bind port 0.0.0.0:5432/tcp: Error starting userland proxy: listen tcp4 0.0.0.0:5432: bind: address already in use`, faça o seguinte: **_sudo lsof -i :5432_** verifica a nuperação caso for _1154_ por exemplo, execute **_sudo kill 1154_** e rode novamente o `sudo docker compose up`. Deixa rodando neste terminal.

Execute o script `npm run dev`.

### 3 - Versão

Node: `20.16.0`

## :Abel Sena: Criador

### Informações adicionais.

- GitHub: [@SenaBel](https://github.com/SenaBel)
- LinkedIn: [@Abel Sena](www.linkedin.com/in/abel-sena)
