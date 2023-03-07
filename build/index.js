"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
const types_1 = require("./types");
(0, database_1.createUser)('u003', 'beltrano@email.com', 'beltrano99');
(0, database_1.getAllUsers)();
(0, database_1.createProduct)('p004', 'Monitor HD', 800, types_1.CATEGORIA.MONITORES);
(0, database_1.getAllProducts)();
(0, database_1.getProductById)('1');
(0, database_1.queryProductsByName)('Monitor');
(0, database_1.createPurchase)('u003', 'p004', 2, 1600);
(0, database_1.getAllPurchasesFromUserId)('u003');
//# sourceMappingURL=index.js.map