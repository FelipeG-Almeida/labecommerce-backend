import { products, users, purchases } from './database';
import express, { Request, Response } from 'express';
import { CATEGORIA, Tuser } from './types';
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
