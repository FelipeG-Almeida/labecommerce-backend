import {
    createUser,
    getAllUsers,
    createProduct,
    getAllProducts,
    getProductById,
    queryProductsByName,
    createPurchase,
    getAllPurchasesFromUserId,
} from './database';
import { CATEGORIA } from './types';

createUser('u003', 'beltrano@email.com', 'beltrano99');
getAllUsers();
createProduct('p004', 'Monitor HD', 800, CATEGORIA.MONITORES);
getAllProducts();
getProductById('1');
queryProductsByName('Monitor');
createPurchase('u003', 'p004', 2, 1600);
getAllPurchasesFromUserId('u003');
