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
