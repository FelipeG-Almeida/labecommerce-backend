CREATE TABLE
    users (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
    );

SELECT * FROM users;

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

SELECT * FROM products;

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