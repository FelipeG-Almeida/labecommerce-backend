"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPurchasesFromUserId = exports.createPurchase = exports.queryProductsByName = exports.getProductById = exports.getAllProducts = exports.createProduct = exports.getAllUsers = exports.createUser = exports.purchases = exports.products = exports.users = void 0;
const types_1 = require("./types");
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
        category: types_1.CATEGORIA.PLACAS_DE_VIDEO,
    },
    {
        id: '2',
        name: 'Monitor Gamer Curvo',
        price: 1500,
        category: types_1.CATEGORIA.MONITORES,
    },
];
exports.purchases = [
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
function createUser(id, email, password) {
    exports.users.push({ id: id, email: email, password: password });
    console.log('Cadastro realizado com sucesso');
}
exports.createUser = createUser;
function getAllUsers() {
    console.table(exports.users);
}
exports.getAllUsers = getAllUsers;
function createProduct(id, name, price, category) {
    exports.products.push({ id: id, name: name, price: price, category: category });
    console.log('Cadastro realizado com sucesso');
}
exports.createProduct = createProduct;
function getAllProducts() {
    console.table(exports.products);
}
exports.getAllProducts = getAllProducts;
function getProductById(id) {
    console.table(exports.products.filter((product) => product.id === id));
}
exports.getProductById = getProductById;
function queryProductsByName(q) {
    console.table(exports.products.filter((product) => product.name.includes(q)));
}
exports.queryProductsByName = queryProductsByName;
function createPurchase(userId, productId, quantity, totalPrice) {
    exports.purchases.push({
        userId: userId,
        productId: productId,
        quantity: quantity,
        totalPrice: totalPrice,
    });
    console.log("Cadastro realizado com sucesso");
}
exports.createPurchase = createPurchase;
function getAllPurchasesFromUserId(userId) {
    console.table(exports.purchases.filter((purchase) => purchase.userId === userId));
}
exports.getAllPurchasesFromUserId = getAllPurchasesFromUserId;
//# sourceMappingURL=database.js.map