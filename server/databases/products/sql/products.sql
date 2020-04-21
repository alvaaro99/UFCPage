create table product
(
    id          bigint       not null
        primary key,
    description varchar(255) null,
    image       longtext null,
    name        varchar(255) null,
    price       float        null
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO PRODUCTS.product (id, description, image, name, price) VALUES (1, 'Coquilla de color negro, tamaño único', 'ufc-images/coquilla-black.jpg', 'Coquilla', 15);
INSERT INTO PRODUCTS.product (id, description, image, name, price) VALUES (2, 'Guantillas de ufc rojo y negro', 'ufc-images/gloves-ufc-black-red.webp', 'Guantillas R/N', 28);
INSERT INTO PRODUCTS.product (id, description, image, name, price) VALUES (3, 'Casco Abierto Negro', 'ufc-images/head-guard-black.jpg', 'Casco Negro', 34.99);
INSERT INTO PRODUCTS.product (id, description, image, name, price) VALUES (4, 'Casco Abierto Rojo', 'ufc-images/head-guard-red.jpeg', 'Casco Rojo', 34.99);
INSERT INTO PRODUCTS.product (id, description, image, name, price) VALUES (5, 'Proteccion para las tibias de espuma dura, color negro', 'ufc-images/leg-guard-black-ufc.jpg', 'Tibiales Negros UFC', 30.5);
INSERT INTO PRODUCTS.product (id, description, image, name, price) VALUES (6, 'Manoplas de entrenamiento marca ufc', 'ufc-images/manoplas-ufc.jpg', 'Manoplas UFC', 25.99);
INSERT INTO PRODUCTS.product (id, description, image, name, price) VALUES (7, 'Proteccion de antebrazos para entrenamiento, marca Buddha', 'ufc-images/paos-buddha.jpg', 'Paos Buddha', 39.99);
INSERT INTO PRODUCTS.product (id, description, image, name, price) VALUES (8, 'Pantalones cortos de UFC', 'ufc-images/shorts-ufc.jpeg', 'Pantalones UFC', 21.49);
INSERT INTO PRODUCTS.product (id, description, image, name, price) VALUES (9, 'Proteccion ligera para piernas', 'ufc-images/slim-leg-guard-black.jpg', 'Tibiales Tela Negro', 39.99);
INSERT INTO PRODUCTS.product (id, description, image, name, price) VALUES (10, 'Camiseta de marca UFC, color gris', 'ufc-images/tshirt-gray-ufc.jpeg', 'Camiseta UFC', 15.99);
INSERT INTO PRODUCTS.product (id, description, image, name, price) VALUES (11, 'Guantillas marca UFC, color azul y negro', 'ufc-images/ufc-gloves-blue-black.jpeg', 'Guantilla A/N', 28);
INSERT INTO PRODUCTS.product (id, description, image, name, price) VALUES (12, 'Saco pesado de entrenamiento UFC, color rojo y blanco', 'ufc-images/saco-ufc-rojo-blanco.jpeg', 'Saco UFC', 84.99);

