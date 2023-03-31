import { products, users, purchases } from './database';
import express, { Request, Response } from 'express';
import { CATEGORIA, Tproduct, Tuser } from './types';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log('Servidor rodando na porta 3003');
});

app.get('/users', (req: Request, res: Response) => {
    try {
        res.status(200).send(users);
    } catch (error) {
        if (res.statusCode === 200) {
            res.status(500);
            res.send('Erro inesperado');
        }
    }
});

app.get('/products', (req: Request, res: Response) => {
    try {
        res.status(200).send(products);
    } catch (error) {
        if (res.statusCode === 200) {
            res.status(500);
            res.send('Erro inesperado');
        }
    }
});

app.get('/product/search', (req: Request, res: Response) => {
    try {
        const q = req.query.name as string;
        if (!q) {
            res.status(400);
            throw new Error(
                'O nome do produto procurado deve ter ao menos 1 caractere'
            );
        }
        const result = q
            ? products.filter((product) =>
                  product.name.toLowerCase().includes(q.toLowerCase())
              )
            : products;
        res.status(200).send(result);
    } catch (error: any) {
        res.send(error.message);
        console.log(error);
    }
});

app.post('/users', (req: Request, res: Response) => {
    try {
        const { id, email, password }: Tuser = req.body;
        if (typeof id != 'string') {
            res.status(400);
            throw new Error("O campo 'id' deve ser uma string");
        }
        if (typeof email != 'string') {
            res.status(400);
            throw new Error("O campo 'email' deve ser uma string");
        }
        if (typeof password != 'string') {
            res.status(400);
            throw new Error("O campo 'password' deve ser uma string");
        }
        const checkUser = users.find((user) => user.id === id);
        const checkEmail = users.find((user) => user.email === email);
        if (checkUser) {
            res.status(400);
            throw new Error(
                "O 'id' informado já existe, tente novamente com um novo id"
            );
        }
        if (checkEmail) {
            res.status(400);
            throw new Error(
                "O 'email' informado já existe, tente novamente com um novo email"
            );
        }
        users.push({ id: id, email: email, password: password });
        res.status(201).send('Cadastro realizado com sucesso');
        console.table(users);
    } catch (error: any) {
        console.log(error.message);
        res.send(error.message);
    }
});

app.post('/products', (req: Request, res: Response) => {
    try {
        const id: string = req.body.id;
        const name: string = req.body.name;
        const price: number = req.body.price;
        const category: CATEGORIA = req.body.category;
        const newProduct = { id, name, price, category };
        if (typeof id != 'string') {
            res.status(400);
            throw new Error("O campo 'id' deve ser uma string");
        }
        if (typeof name != 'string') {
            res.status(400);
            throw new Error("O campo 'name' deve ser uma string");
        }
        if (typeof price != 'number') {
            res.status(400);
            throw new Error("O campo 'price' deve ser do tipo number");
        }
        if (
            category != CATEGORIA.JOGOS &&
            category != CATEGORIA.MONITORES &&
            category != CATEGORIA.PERIFERICOS &&
            category != CATEGORIA.PLACAS_DE_VIDEO
        ) {
            res.status(400);
            throw new Error(
                "O campo 'Categoria' deve ser 'Monitores', 'Jogos', 'Periféricos' ou 'Placas de Vídeo'"
            );
        }
        const checkProduct = products.find((product) => product.id === id);
        if (checkProduct) {
            res.status(400);
            throw new Error(
                "O 'id' informado já existe, tente novamente com um novo id"
            );
        }
        products.push(newProduct);
        res.status(201).send('Cadastro realizada com sucesso');
        console.table(products);
    } catch (error: any) {
        console.log(error.message);
        res.send(error.message);
    }
});

app.post('/purchases', (req: Request, res: Response) => {
    try {
        const userId = req.body.userId;
        const productId = req.body.productId;
        const quantity = req.body.quantity;
        const totalPrice = req.body.totalPrice;
        const newPurchace = { userId, productId, quantity, totalPrice };
        if (typeof userId != 'string') {
            res.status(400);
            throw new Error("O campo 'User ID' deve ser uma string");
        }
        if (typeof productId != 'string') {
            res.status(400);
            throw new Error("O campo 'Product ID' deve ser uma string");
        }
        if (typeof quantity != 'number') {
            res.status(400);
            throw new Error("O campo 'Quantidade' deve ser do tipo 'number'");
        }
        if (typeof totalPrice != 'number') {
            res.status(400);
            throw new Error("O campo 'Preço Total' deve ser do tipo 'number'");
        }
        const checkUser = users.find((user) => user.id === userId);
        const checkProduct = products.find(
            (product) => product.id === productId
        );
        if (!checkUser) {
            res.status(400);
            throw new Error("O 'id' informado não existe no banco de usuários");
        }
        if (!checkProduct) {
            res.status(400);
            throw new Error("O 'id' informado não existe no banco de produtos");
        }
        if (totalPrice !== checkProduct.price * quantity) {
            res.status(400);
            throw new Error('O preço total não confere com a quantidade');
        }
        purchases.push(newPurchace);
        res.status(201).send('Cadastro realizada com sucesso');
        console.table(purchases);
    } catch (error: any) {
        console.log(error.message);
        res.send(error.message);
    }
});

app.get('/products/:id', (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        const product = products.find((item) => item.id === id);
        if (!product) {
            res.status(400);
            throw new Error("O 'id' do produto informado não existe");
        }
        res.status(200).send(product);
    } catch (error: any) {
        console.log(error.message);
        res.send(error.message);
    }
});

app.get('/users/:id/purchases', (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        const purchase = purchases.find((item) => item.userId === id);
        if (!purchase) {
            res.status(400);
            throw new Error("O 'id' do usuário informado não existe");
        }
        res.status(200).send(purchase);
    } catch (error: any) {
        console.log(error.message);
        res.send(error.message);
    }
});

app.delete('/users/:id', (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        const index: number = users.findIndex((user) => user.id === id);
        console.log('Antes:', users);
        if (index >= 0) {
            users.splice(index, 1);
            res.status(200).send('User apagado com sucesso');
        } else {
            res.status(400);
            throw new Error("O 'id' do usuário informado não existe");
        }
        console.log('Depois:', users);
    } catch (error: any) {
        console.log(error.message);
        res.send(error.message);
    }
});

app.delete('/products/:id', (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        const index: number = products.findIndex(
            (product) => product.id === id
        );
        console.log('Antes:', products);
        if (index >= 0) {
            products.splice(index, 1);
            res.status(200).send('Product apagado com sucesso');
        } else {
            res.status(400);
            throw new Error("O 'id' do produto informado não existe");
        }
        console.log('Depois:', products);
    } catch (error: any) {
        console.log(error.message);
        res.send(error.message);
    }
});

app.put('/users/:id', (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const newEmail = req.body.email;
        const newPassword = req.body.password;
        const user = users.find((user) => user.id === id);
        console.log('Antes:', user);
        if (user) {
            user.email = newEmail || user.email;
            user.password = newPassword || user.password;
        } else {
            res.status(400);
            throw new Error("O 'id' do usuário informado não existe");
        }
        if (typeof id != 'string') {
            res.status(400);
            res.send("O campo 'id' deve ser uma string");
        }
        if (typeof newEmail != 'string') {
            res.status(400);
            res.send("O campo 'Email' deve ser uma string");
        }
        if (typeof newPassword != 'string') {
            res.status(400);
            res.send("O campo 'Password' deve ser uma string");
        }
        console.log('Depois:', user);
        res.status(200).send('Cadastro atualizado com sucesso');
    } catch (error: any) {
        console.log(error.message);
        res.send(error.message);
    }
});

app.put('/products/:id', (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        const newName: string | undefined = req.body.name;
        const newPrice: number | undefined = req.body.price;
        const newCategory: CATEGORIA | undefined = req.body.category;
        const product: Tproduct | undefined = products.find(
            (product) => product.id === id
        );
        console.log('Antes:', product);
        if (product) {
            product.name = newName || product.name;
            product.category = newCategory || product.category;
            product.price = newPrice || product.price;
        } else {
            res.status(400);
            throw new Error("O 'id' do produto informado não existe");
        }
        if (typeof id != 'string') {
            res.status(400);
            res.send("O campo 'id' deve ser uma string");
        }
        if (typeof newName != 'string') {
            res.status(400);
            res.send("O campo 'Name' deve ser uma string");
        }
        if (typeof newPrice != 'number') {
            res.status(400);
            res.send("O campo 'Price' deve ser um número");
        }
        if (
            newCategory != CATEGORIA.JOGOS &&
            newCategory != CATEGORIA.MONITORES &&
            newCategory != CATEGORIA.PERIFERICOS &&
            newCategory != CATEGORIA.PLACAS_DE_VIDEO
        ) {
            res.status(400);
            throw new Error(
                "O campo 'Categoria' deve ser 'Monitores', 'Jogos', 'Periféricos' ou 'Placas de Vídeo'"
            );
        }
        console.log('Depois:', product);
        res.status(200).send('Produto atualizado com sucesso');
    } catch (error: any) {
        console.log(error.message);
        res.send(error.message);
    }
});
