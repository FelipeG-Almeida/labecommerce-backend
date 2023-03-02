"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.purchases = exports.products = exports.users = void 0;
exports.users = [
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
exports.products = [
    {
        id: '1',
        name: 'Placa RX6600',
        price: 1250,
        category: 'Placas de Vídeo',
    },
    {
        id: '2',
        name: 'Monitor Gamer Curvo',
        price: 1500,
        category: 'Monitores',
    },
];
exports.purchases = [
    {
        userId: '1',
        productID: '2',
        quantity: 1,
        totalPrice: 1500,
    },
    {
        userId: '2',
        productID: '1',
        quantity: 2,
        totalPrice: 2500,
    },
];
//# sourceMappingURL=database.js.map