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
    res.status(200).send(users);
});

app.get('/products', (req: Request, res: Response) => {
    res.status(200).send(products);
});

app.get('/product/search', (req: Request, res: Response) => {
    const q = req.query.name as string;
    const result = q
        ? products.filter((product) =>
              product.name.toLowerCase().includes(q.toLowerCase())
          )
        : products;
    res.status(200).send(result);
});

app.post('/users', (req: Request, res: Response) => {
    const { id, email, password }: Tuser = req.body;
    users.push({ id: id, email: email, password: password });
    res.status(201).send('Cadastro realizado com sucesso');
    console.table(users);
});

app.post('/products', (req: Request, res: Response) => {
    const id: string = req.body.id;
    const name: string = req.body.name;
    const price: number = req.body.price;
    const category: CATEGORIA = req.body.category;
    const newProduct = { id, name, price, category };
    products.push(newProduct);
    res.status(201).send('Cadastro realizada com sucesso');
    console.table(products);
});

app.post('/purchaces', (req: Request, res: Response) => {
    const userId: string = req.body.userId;
    const productId: string = req.body.productId;
    const quantity: number = req.body.quantity;
    const totalPrice: number = req.body.totalPrice;
    const newPurchace = { userId, productId, quantity, totalPrice };
    purchases.push(newPurchace);
    res.status(201).send('Cadastro realizada com sucesso');
    console.table(purchases);
});

app.get('/products/:id', (req: Request, res: Response) => {
    const id: string = req.params.id;
    const product = products.find((item) => item.id === id);
    res.status(200).send(product);
});

app.get('/users/:id/purchases', (req: Request, res: Response) => {
    const id: string = req.params.id;
    const purchase = purchases.find((item) => item.userId === id);
    res.status(200).send(purchase);
});

app.delete('/users/:id', (req: Request, res: Response) => {
    const id: string = req.params.id;
    const index: number = users.findIndex((user) => user.id === id);
    let message: string;
    console.log('Antes:', users);
    if (index >= 0) {
        users.splice(index, 1);
        message = 'User apagado com sucesso';
    } else {
        message = 'User não encontrado';
    }
    console.log('Depois:', users);
    res.status(200).send(message);
});

app.delete('/products/:id', (req: Request, res: Response) => {
    const id: string = req.params.id;
    const index: number = products.findIndex((product) => product.id === id);
    let message: string;
    console.log('Antes:', products);
    if (index >= 0) {
        products.splice(index, 1);
        message = 'Product apagado com sucesso';
    } else {
        message = 'Product não encontrado';
    }
    console.log('Depois:', products);
    res.status(200).send(message);
});

app.put('/users/:id', (req: Request, res: Response) => {
    const id: string = req.params.id;
    const newEmail: string | undefined = req.body.email;
    const newPassword: string | undefined = req.body.password;
    const user: Tuser | undefined = users.find((user) => user.id === id);
    console.log('Antes:', user);

    if (user) {
        user.email = newEmail || user.email;
        user.password = newPassword || user.password;
    }
    console.log('Depois:', user);
    res.status(200).send('Cadastro atualizado com sucesso');
});

app.put('/products/:id', (req: Request, res: Response) => {
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
    }
    console.log('Depois:', product);
    res.status(200).send('Produto atualizado com sucesso');
});
