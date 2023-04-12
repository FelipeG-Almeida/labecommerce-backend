import express, { Request, Response } from 'express';
import { DESCRIPTION, Tproduct, Tuser } from './types';
import { db } from './database/knex';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log('Servidor rodando na porta 3003');
});

app.get('/users', async (req: Request, res: Response) => {
    const users = await db.raw(`SELECT * FROM users`);
    try {
        res.status(200).send(users);
    } catch (error) {
        if (res.statusCode === 200) {
            res.status(500);
            res.send('Erro inesperado');
        }
    }
});

app.get('/products', async (req: Request, res: Response) => {
    const products = await db.raw(`SELECT * FROM products`);
    try {
        res.status(200).send(products);
    } catch (error) {
        if (res.statusCode === 200) {
            res.status(500);
            res.send('Erro inesperado');
        }
    }
});

app.get('/product/search', async (req: Request, res: Response) => {
    try {
        const q = req.query.name as string;
        if (!q) {
            res.status(400);
            throw new Error(
                'O nome do produto procurado deve ter ao menos 1 caractere'
            );
        }
        const product = await db.raw(
            `SELECT * FROM products WHERE name LIKE '%${q}%'`
        );
        if (!product.length) {
            throw new Error(`O produto '${q} não está cadastrado.'`);
        } else {
            res.status(200).send(product);
        }
    } catch (error: any) {
        res.send(error.message);
        console.log(error);
    }
});

app.post('/users', async (req: Request, res: Response) => {
    try {
        const { id, name, email, password }: Tuser = req.body;
        if (typeof id != 'string') {
            res.status(400);
            throw new Error("O campo 'id' deve ser uma string");
        }
        if (typeof name != 'string') {
            res.status(400);
            throw new Error("O campo 'Nome' deve ser uma string");
        }
        if (typeof email != 'string') {
            res.status(400);
            throw new Error("O campo 'E-mail' deve ser uma string");
        }
        if (typeof password != 'string') {
            res.status(400);
            throw new Error("O campo 'Senha' deve ser uma string");
        }
        const checkUser = await db.raw(
            `SELECT * FROM users WHERE id = "${id}"`
        );
        const checkEmail = await db.raw(
            `SELECT * FROM users WHERE email = "${email}"`
        );
        if (checkUser.length) {
            res.status(400);
            throw new Error(
                "O 'id' informado já existe, tente novamente com um novo id"
            );
        }
        if (checkEmail.length) {
            res.status(400);
            throw new Error(
                "O 'email' informado já existe, tente novamente com um novo email"
            );
        }
        await db.raw(
            `INSERT INTO
                users (id, name, email, password)
            VALUES
                ("${id}", "${name}", "${email}", "${password}")`
        );
        res.status(201).send('Cadastro realizado com sucesso');
    } catch (error: any) {
        console.log(error.message);
        res.send(error.message);
    }
});

app.post('/products', async (req: Request, res: Response) => {
    try {
        const id: string = req.body.id;
        const name: string = req.body.name;
        const price: number = req.body.price;
        const description: DESCRIPTION = req.body.description;
        const imageUrl: string = req.body.imageUrl;
        if (typeof id != 'string') {
            res.status(400);
            throw new Error("O campo 'id' deve ser uma string");
        }
        if (typeof name != 'string') {
            res.status(400);
            throw new Error("O campo 'Nome' deve ser uma string");
        }
        if (typeof price != 'number') {
            res.status(400);
            throw new Error("O campo 'Preço' deve ser do tipo number");
        }
        if (
            description != DESCRIPTION.JOGOS &&
            description != DESCRIPTION.MONITORES &&
            description != DESCRIPTION.PERIFERICOS &&
            description != DESCRIPTION.PLACAS_DE_VIDEO
        ) {
            res.status(400);
            throw new Error(
                "O campo 'Descrição' deve ser 'Monitores', 'Jogos', 'Periféricos' ou 'Placas de Vídeo'"
            );
        }
        if (typeof imageUrl != 'string') {
            res.status(400);
            throw new Error("O campo 'URL' deve ser uma string");
        }
        const checkProduct = await db.raw(
            `SELECT * FROM products WHERE id = "${id}"`
        );
        if (checkProduct.length) {
            res.status(400);
            throw new Error(
                "O 'id' informado já existe, tente novamente com um novo id"
            );
        }
        await db.raw(
            `INSERT INTO
                products (id, name, price, description, image_url)
            VALUES
                ("${id}", "${name}", ${price}, "${description}", "${imageUrl}")`
        );
        res.status(201).send('Cadastro realizada com sucesso');
    } catch (error: any) {
        console.log(error.message);
        res.send(error.message);
    }
});

app.post('/purchases', async (req: Request, res: Response) => {
    try {
        const id = req.body.id;
        const buyerId = req.body.buyerId;
        const totalPrice = req.body.totalPrice;
        const paid = req.body.paid;
        if (typeof id != 'string') {
            res.status(400);
            throw new Error("O campo 'id' deve ser uma string");
        }
        if (typeof buyerId != 'string') {
            res.status(400);
            throw new Error("O campo 'Id do Comprador' deve ser uma string");
        }
        if (typeof totalPrice != 'number') {
            res.status(400);
            throw new Error("O campo 'Preço Total' deve ser do tipo 'number'");
        }
        if (typeof paid != 'number') {
            res.status(400);
            throw new Error("O campo 'Pago' deve ser do tipo 'number'");
        }
        const checkPurchase = await db.raw(
            `SELECT * FROM purchases WHERE id = "${id}"`
        );
        const checkUser = await db.raw(
            `SELECT * FROM users WHERE id = "${buyerId}"`
        );
        if (checkPurchase.length) {
            res.status(400);
            throw new Error("O 'id' informado já existe");
        }
        if (!checkUser.length) {
            res.status(400);
            throw new Error("O 'id' informado não existe no banco de usuários");
        }
        await db.raw(
            `INSERT INTO
                purchases (id, buyer_id, total_price, paid)
            VALUES
                ('${id}', '${buyerId}', ${totalPrice}, ${paid})`
        );
        res.status(201).send('Cadastro realizada com sucesso');
    } catch (error: any) {
        console.log(error.message);
        res.send(error.message);
    }
});

app.get('/products/:id', async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        const product = await db.raw(`SELECT * FROM products WHERE id = '${id}'`)
        if (!product.length) {
            res.status(400);
            throw new Error("O 'id' do produto informado não existe");
        }
        res.status(200).send(product);
    } catch (error: any) {
        console.log(error.message);
        res.send(error.message);
    }
});

app.get('/users/:id/purchases', async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        const purchase = await db.raw(`SELECT * FROM purchases WHERE buyer_id = '${id}'`)
        if (!purchase.length) {
            res.status(400);
            throw new Error("O 'id' do usuário informado não realizou nenhuma compra");
        }
        res.status(200).send(purchase);
    } catch (error: any) {
        console.log(error.message);
        res.send(error.message);
    }
});

// app.delete('/users/:id', (req: Request, res: Response) => {
//     try {
//         const id: string = req.params.id;
//         const index: number = users.findIndex((user) => user.id === id);
//         console.log('Antes:', users);
//         if (index >= 0) {
//             users.splice(index, 1);
//             res.status(200).send('User apagado com sucesso');
//         } else {
//             res.status(400);
//             throw new Error("O 'id' do usuário informado não existe");
//         }
//         console.log('Depois:', users);
//     } catch (error: any) {
//         console.log(error.message);
//         res.send(error.message);
//     }
// });

// app.delete('/products/:id', (req: Request, res: Response) => {
//     try {
//         const id: string = req.params.id;
//         const index: number = products.findIndex(
//             (product) => product.id === id
//         );
//         console.log('Antes:', products);
//         if (index >= 0) {
//             products.splice(index, 1);
//             res.status(200).send('Product apagado com sucesso');
//         } else {
//             res.status(400);
//             throw new Error("O 'id' do produto informado não existe");
//         }
//         console.log('Depois:', products);
//     } catch (error: any) {
//         console.log(error.message);
//         res.send(error.message);
//     }
// });

// app.put('/users/:id', (req: Request, res: Response) => {
//     try {
//         const id = req.params.id;
//         const newEmail = req.body.email;
//         const newPassword = req.body.password;
//         const user = users.find((user) => user.id === id);
//         console.log('Antes:', user);
//         if (user) {
//             user.email = newEmail || user.email;
//             user.password = newPassword || user.password;
//         } else {
//             res.status(400);
//             throw new Error("O 'id' do usuário informado não existe");
//         }
//         if (typeof id != 'string') {
//             res.status(400);
//             res.send("O campo 'id' deve ser uma string");
//         }
//         if (typeof newEmail != 'string') {
//             res.status(400);
//             res.send("O campo 'Email' deve ser uma string");
//         }
//         if (typeof newPassword != 'string') {
//             res.status(400);
//             res.send("O campo 'Password' deve ser uma string");
//         }
//         console.log('Depois:', user);
//         res.status(200).send('Cadastro atualizado com sucesso');
//     } catch (error: any) {
//         console.log(error.message);
//         res.send(error.message);
//     }
// });

// app.put('/products/:id', (req: Request, res: Response) => {
//     try {
//         const id: string = req.params.id;
//         const newName: string | undefined = req.body.name;
//         const newPrice: number | undefined = req.body.price;
//         const newdescription: CATEGORIA | undefined = req.body.description;
//         const product: Tproduct | undefined = products.find(
//             (product) => product.id === id
//         );
//         console.log('Antes:', product);
//         if (product) {
//             product.name = newName || product.name;
//             product.description = newdescription || product.description;
//             product.price = newPrice || product.price;
//         } else {
//             res.status(400);
//             throw new Error("O 'id' do produto informado não existe");
//         }
//         if (typeof id != 'string') {
//             res.status(400);
//             res.send("O campo 'id' deve ser uma string");
//         }
//         if (typeof newName != 'string') {
//             res.status(400);
//             res.send("O campo 'Name' deve ser uma string");
//         }
//         if (typeof newPrice != 'number') {
//             res.status(400);
//             res.send("O campo 'Price' deve ser um número");
//         }
//         if (
//             newdescription != CATEGORIA.JOGOS &&
//             newdescription != CATEGORIA.MONITORES &&
//             newdescription != CATEGORIA.PERIFERICOS &&
//             newdescription != CATEGORIA.PLACAS_DE_VIDEO
//         ) {
//             res.status(400);
//             throw new Error(
//                 "O campo 'Categoria' deve ser 'Monitores', 'Jogos', 'Periféricos' ou 'Placas de Vídeo'"
//             );
//         }
//         console.log('Depois:', product);
//         res.status(200).send('Produto atualizado com sucesso');
//     } catch (error: any) {
//         console.log(error.message);
//         res.send(error.message);
//     }
// });
