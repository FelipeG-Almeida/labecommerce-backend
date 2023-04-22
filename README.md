# LabeCommerce Backend

Este é o projeto LabeCommerce, uma aplicação web de e-commerce desenvolvida como parte do projeto final do curso de Desenvolvimento Full Stack da Labenu, unicamente para fins didáticos.

## Sobre o Projeto

O LabEcommerce é uma plataforma de e-commerce que permite aos usuários visualizar produtos, usuários e efetuar pedidos. O backend é construído em Node.js utilizando o framework Express e integra-se com um banco de dados sqlite para armazenamento dos dados.

## Funcionalidades

O backend do LabEcommerce possui as seguintes funcionalidades:

- CRUD (Create, Read, Update, Delete) de produtos, usuários e pedidos
- Validação dos endpoints

## Endpoints

A API possui os seguintes endpoints disponíveis:

- **GET /users**: Retorna a lista de todos usuários cadastrados.
- **POST /users**: Cadastra um novo usuário.

- **POST /products**: Cadastra um novo produto.
- **GET /products**: Retorna a lista de todos os produtos cadastrados.
- **PUT /products/:id**: Atualiza um produto específico com base no seu Id.

- **POST /purchases**: Cadastra um novo pedido.
- **DELETE /purchases/:id**: Remove um pedido específico com base no seu Id.
- **GET /purchases/:id**: Retorna um pedido específico com base no seu Id.

## Configuração do Projeto

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

## Documentação da API

A documentação da API pode ser encontrada em https://documenter.getpostman.com/view/24823235/2s93RRxu6g, que fornece detalhes sobre os endpoints disponíveis, parâmetros de entrada, exemplos de solicitações e respostas.

## Tecnologias Utilizadas

- Node.js
- Express
- SQLite3
- Knex
- TypeScript

## Contribuição

Contribuições são bem-vindas! Se você deseja contribuir com o projeto, sinta-se à vontade para abrir uma nova issue ou enviar um pull request.
