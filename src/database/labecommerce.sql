-- Active: 1680041740726@@127.0.0.1@3306
CREATE TABLE
    users (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        createad_at DEFAULT (DATE ('now'))
    );

DELETE FROM users WHERE id = "5";

INSERT INTO
    users (id, name, email, password)
VALUES
    ("1", "Shyvana", "shyvana@demacia.com.br", "dragonsareawesome"),
    ("2", "Veigar", "veigar@gmail.com", "evil"),
    ("3", "Gálio", "galio@demacia.com.br", "statue");

CREATE TABLE
    products (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        name TEXT NOT NULL,
        price REAL NOT NULL,
        description TEXT NOT NULL,
        image_url TEXT
    );

INSERT INTO
    products (id, name, price, description)
VALUES
    ("1", "RX 6600", 2000.00, "Placas de Vídeo"),
    ("2", "Teclado Mecânico Logitech", 200.50,"Periféricos"),
    ("3", "Monitor Gamer 120hz", 1965.75, "Monitores"),
    ("4", "Soundbar JBL", 750.00, "Periféricos"),
    ("5", "Red Dead Remdemption 2", 150.50, "Jogos");

SELECT
    *
FROM
    products
WHERE
    name LIKE '%a%';

UPDATE products
SET
    price = 700
WHERE
    id = "4";

UPDATE users
SET
    password = "veryevil"
WHERE
    id = "2";

SELECT
    *
FROM
    users
ORDER BY
    email ASC;

SELECT
    *
FROM
    products
ORDER BY
    price ASC
LIMIT
    4
OFFSET
    0;

SELECT
    *
FROM
    products
WHERE
    price > 100
    AND price < 800
ORDER BY
    price ASC;

CREATE TABLE
    purchases (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        buyer_id TEXT NOT NULL,
        total_price REAL NOT NULL,
        created_at TEXT DEFAULT(DATE('now', 'localtime')),
        paid INTEGER NOT NULL,
        FOREIGN KEY (buyer_id) REFERENCES users (id)
    );

INSERT INTO
    purchases (id, buyer_id, total_price, paid)
VALUES
    ('1', '1', 5000, 0),
    ('2', '1', 2000, 0),
    ('3', '2', 750, 0),
    ('4', '3', 500, 0);

UPDATE purchases
SET
    total_price = 1950
WHERE
    id = '2';

SELECT
    *
FROM
    users
    INNER JOIN purchases ON purchases.buyer_id = users.id;

CREATE TABLE
    purchases_products (
        purchase_id TEXT NOT NULL,
        product_id TEXT NOT NULL,
        quantity INTEGER NOT NULL,
        FOREIGN KEY (purchase_id) REFERENCES purchases (id),
        FOREIGN KEY (product_id) REFERENCES products (id)
    );

INSERT INTO
    purchases_products
VALUES
    ('1', '1', 2),
    ('2', '2', 1),
    ('3', '3', 2);

SELECT
    purchase_id as idCompra,
    product_id as idProduto,
    users.name as comprador,
    products.name as nomeProduto,
    quantity as quantidade,
    purchases.total_price as preco
FROM
    purchases_products
    INNER JOIN purchases ON purchase_id = purchases.id
    INNER JOIN products ON product_id = products.id
    INNER JOIN users ON purchases.buyer_id = users.id;