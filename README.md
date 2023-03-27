# Documentação da API

## Tabela de Conteúdos

-   [Visão Geral](#1-visão-geral)

-   [Diagrama ER](#2-diagrama-er)

-   [Rodando localmente](#3-rodando-localmente)

## 1. Visão Geral

Visão geral do projeto, um pouco das tecnologias usadas.

-   **[TypeScript](https://www.typescriptlang.org/)**

-   **[Express](https://expressjs.com/)**

-   **[Postgres](https://www.postgresql.org/)**

## 2. Diagrama ER

[ Voltar para o topo ](#tabela-de-conteúdos)

Diagrama ER da API definindo as relações entre as tabelas do banco de dados.

![Diagrama ER](https://github.com/ggsdev/m6_sprint-1/blob/main/backend/src/diagram.png?raw=true)

## 3. Rodando localmente

[ Voltar para o topo ](#tabela-de-conteúdos)

### 3.1 Clone o projeto em sua máquina e instale as depêndencias da aplicação

Execute o comando em seu terminal:

```bash
yarn
```
### 3.2 Crie e preencha o arquivo .env

```bash
Crie um arquivo .env, seguindo como base o arquivo .env.example e preencha os dados de conexão com o banco de dados
```

### 3.3 Rode as migrations:

```bash
yarn typeorm migration:run -d src/data-source.ts
```

### 3.4 Rodando o servidor localmente

Execute o comando em seu terminal:

```bash
yarn dev
```
