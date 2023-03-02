import { users, products, purchases } from './database';

users.map((user) =>
    console.log(
        'ID:',
        user.id,
        '- Email:',
        user.email,
        '- Senha: ',
        user.password
    )
);
products.map((product) =>
    console.log(
        'ID:',
        product.id,
        '- Nome:',
        product.name,
        '- Preço: ',
        product.price,
        '- Categoria: ',
        product.category
    )
);
purchases.map((purchase) =>
    console.log(
        'ID Usuário:',
        purchase.userId,
        '- ID Produto:',
        purchase.productID,
        '- Quantidade: ',
        purchase.quantity,
        '- Total:',
        purchase.totalPrice
    )
);
