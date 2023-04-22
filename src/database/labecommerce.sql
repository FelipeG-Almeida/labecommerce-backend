-- Active: 1680041740726@@127.0.0.1@3306

CREATE TABLE
    users (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        createad_at DEFAULT (DATE ('now', 'localtime'))
    );

INSERT INTO
    users (id, name, email, password)
VALUES (
        "1",
        "Shyvana",
        "shyvana@demacia.com.br",
        "dragonsareawesome"
    ), (
        "2",
        "Veigar",
        "veigar@gmail.com",
        "evil"
    ), (
        "3",
        "Gálio",
        "galio@demacia.com.br",
        "statue"
    );

CREATE TABLE
    products (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        name TEXT NOT NULL,
        price REAL NOT NULL,
        description TEXT NOT NULL,
        image_url TEXT
    );

INSERT INTO
    products (
        id,
        name,
        price,
        description,
        image_url
    )
VALUES (
        "1",
        "RX 6600",
        2000.00,
        "Placa de video Top",
        "https://picsum.photos/seed/rx6600/200/300"
    ), (
        "2",
        "Teclado Mecânico Logitech",
        200.50,
        "Teclado Gamer de alto desempenho",
        "https://picsum.photos/seed/teclado/200/300"
    ), (
        "3",
        "Monitor Gamer 120hz",
        1965.75,
        "Monitor pra não deixar passar aquele headshot",
        "https://picsum.photos/seed/monitor/200/300"
    ), (
        "4",
        "Soundbar JBL",
        750.00,
        "Soundbar pra ouvir o grave do grave",
        ""
    ), (
        "5",
        "Red Dead Remdemption 2",
        150.50,
        "Jogão 10/10, muito bom",
        ""
    );

CREATE TABLE
    purchases (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        buyer TEXT NOT NULL,
        total_price REAL NOT NULL,
        created_at TEXT DEFAULT(DATE('now', 'localtime')),
        paid INTEGER NOT NULL DEFAULT(0),
        FOREIGN KEY (buyer) REFERENCES users (id)
    );

INSERT INTO
    purchases (id, buyer, total_price, paid)
VALUES ('2', '3', 200.5, 0);

CREATE TABLE
    purchases_products (
        purchase_id TEXT NOT NULL,
        product_id TEXT NOT NULL,
        quantity INTEGER NOT NULL,
        FOREIGN KEY (purchase_id) REFERENCES purchases (id),
        FOREIGN KEY (product_id) REFERENCES products (id)
    );

INSERT INTO purchases_products VALUES ('2', '2', 1);