CREATE TABLE
    users (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
    );

INSERT INTO users
VALUES (
        "1",
        "shyvana@demacia.com.br",
        "dragonsareawesome"
    ), (
        "2",
        "veigar@gmail.com",
        "evil"
    ), (
        "3",
        "galio@demacia.com.br",
        "statue"
    );

CREATE TABLE
    products (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        name TEXT NOT NULL,
        price REAL NOT NULL,
        category TEXT NOT NULL
    );

INSERT INTO products
VALUES (
        "1",
        "RX 6600",
        2000.00,
        "Placas de Vídeo"
    ), (
        "2",
        "Teclado Mecânico Logitech",
        200.50,
        "Periféricos"
    ), (
        "3",
        "Monitor Gamer 120hz",
        1965.75,
        "Monitores"
    ), (
        "4",
        "Soundbar JBL",
        750.00,
        "Periféricos"
    ), (
        "5",
        "Red Dead Remdemption 2",
        150.50,
        "Jogos"
    );

SELECT * FROM products
WHERE name LIKE '%a%';

INSERT INTO users
VALUES("4", "viktok@pitolver.com", "thegloriusevolution");

INSERT INTO products
VALUES("6", "League of Legends", 0, "Jogo");

SELECT * FROM products
WHERE id = "6";

DELETE FROM users
WHERE id = "4";

DELETE FROM products
WHERE id = "6";

UPDATE products
SET price = 700
WHERE id = "4";

UPDATE users
SET password = "veryevil"
WHERE id = "2";

SELECT * FROM users
ORDER BY email ASC;

SELECT * FROM products
ORDER BY price ASC
LIMIT 20 OFFSET 0;

SELECT * FROM products
WHERE price > 100 AND price < 800
ORDER BY price ASC;
