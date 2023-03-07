import { Tuser, Tproduct, Tpurchase, CATEGORIA } from './types';

export const users: Tuser[] = [
    {
        id: '1',
        email: 'email1@gmail.com',
        password: '1234',
    },
    {
        id: '2',
        email: 'email2@outlook.com',
        password: '12345',
    },
];

export const products: Tproduct[] = [
    {
        id: '1',
        name: 'Placa RX6600',
        price: 1250,
        category: CATEGORIA.PLACAS_DE_VIDEO,
    },
    {
        id: '2',
        name: 'Monitor Gamer Curvo',
        price: 1500,
        category: CATEGORIA.MONITORES,
    },
];

export const purchases: Tpurchase[] = [
    {
        userId: '1',
        productId: '2',
        quantity: 1,
        totalPrice: 1500,
    },
    {
        userId: '2',
        productId: '1',
        quantity: 2,
        totalPrice: 2500,
    },
];

export function createUser(id: string, email: string, password: string) {
    users.push({ id: id, email: email, password: password });
    console.log('Cadastro realizado com sucesso');
}

export function getAllUsers() {
    console.table(users);
}

export function createProduct(
    id: string,
    name: string,
    price: number,
    category: CATEGORIA
) {
    products.push({ id: id, name: name, price: price, category: category });
    console.log('Cadastro realizado com sucesso');
}

export function getAllProducts() {
    console.table(products);
}

export function getProductById(id: string) {
    console.table(products.filter((product) => product.id === id));
}

export function queryProductsByName(q: string) {
    console.table(products.filter((product) => product.name.includes(q)));
}

export function createPurchase(
    userId: string,
    productId: string,
    quantity: number,
    totalPrice: number
) {
    purchases.push({
        userId: userId,
        productId: productId,
        quantity: quantity,
        totalPrice: totalPrice,
    });
    console.log("Cadastro realizado com sucesso");
    
}

export function getAllPurchasesFromUserId(userId: string) {
    console.table(purchases.filter((purchase) => purchase.userId === userId));
}
