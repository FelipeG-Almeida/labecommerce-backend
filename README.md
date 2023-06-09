# LabeCommerce Backend

<p align="center"><img src="https://socialify.git.ci/FelipeG-Almeida/labecommerce-backend/image?font=Inter&amp;language=1&amp;name=1&amp;owner=1&amp;pattern=Solid&amp;theme=Auto" alt="project-image"></p>

Este é o projeto LabeCommerce, uma aplicação web de e-commerce desenvolvida como parte do projeto final do curso de Desenvolvimento Full Stack da Labenu, unicamente para fins didáticos.

## 🤔 Sobre o Projeto

O LabEcommerce é uma plataforma de e-commerce que permite aos usuários visualizar produtos, usuários e efetuar pedidos. O backend é construído em Node.js utilizando o framework Express e integra-se com um banco de dados sqlite para armazenamento dos dados.

<p align="center"><img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&amp;logo=node.js&amp;logoColor=white" alt="shields"><img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&amp;logo=typescript&amp;logoColor=white" alt="shields"><img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&amp;logo=express&amp;logoColor=%2361DAFB" alt="shields"><img src="https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&amp;logo=sqlite&amp;logoColor=white" alt="shields"><img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&amp;logo=postman&amp;logoColor=white" alt="shields"></p>

## 📑 Funcionalidades

O backend do LabEcommerce possui as seguintes funcionalidades:

- CRUD (Create, Read, Update, Delete) de produtos, usuários e pedidos
- Validação dos endpoints

## 🔚 Endpoints

A API possui os seguintes endpoints disponíveis:

- **GET /users**: Retorna a lista de todos usuários cadastrados.
- **POST /users**: Cadastra um novo usuário.

- **POST /products**: Cadastra um novo produto.
- **GET /products**: Retorna a lista de todos os produtos cadastrados.
- **PUT /products/:id**: Atualiza um produto específico com base no seu Id.

- **POST /purchases**: Cadastra um novo pedido.
- **DELETE /purchases/:id**: Remove um pedido específico com base no seu Id.
- **GET /purchases/:id**: Retorna um pedido específico com base no seu Id.

## 🎲 Banco de dados

Diagrama do banco de dados, suas tabelas e relações:

![241974620-b446bbb0-bc9c-42d9-be04-b9ce1d605bd4](https://github.com/FelipeG-Almeida/labecommerce-backend/assets/73674044/3bedba7f-c0cd-4623-87c1-6e5bd02e10b7)

## ⚙️ Configuração do Projeto

Para configurar o projeto em sua máquina local, siga os passos abaixo:

1. Clone o repositório:

```bash
git clone https://github.com/FelipeG-Almeida/labecommerce-backend.git

```

2. Instale as dependências do projeto:

```bash
cd labecommerce-backend
npm install
```

3. Inicie o servidor:

```bash
npm dev start
```

O servidor será iniciado na porta especificada na variável de ambiente `PORT` (padrão: 3001).

## 📜 Documentação da API

A documentação da API pode ser encontrada em https://documenter.getpostman.com/view/24823235/2s93RRxu6g, que fornece detalhes sobre os endpoints disponíveis, parâmetros de entrada, exemplos de solicitações e respostas.

## 🛠️ Tecnologias Utilizadas

- Node.js
- Express
- SQLite3
- Knex
- TypeScript

## 🤝 Contribuição

Contribuições são bem-vindas! Se você deseja contribuir com o projeto, sinta-se à vontade para abrir uma nova issue ou enviar um pull request.
