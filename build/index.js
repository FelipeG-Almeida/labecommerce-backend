"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
database_1.users.map((user) => console.log('ID:', user.id, '- Email:', user.email, '- Senha: ', user.password));
database_1.products.map((product) => console.log('ID:', product.id, '- Nome:', product.name, '- Preço: ', product.price, "- Categoria: ", product.category));
database_1.purchases.map((purchase) => console.log('ID Usuário:', purchase.userId, '- ID Produto:', purchase.productID, '- Quantidade: ', purchase.quantity, '- Total:', purchase.totalPrice));
//# sourceMappingURL=index.js.map