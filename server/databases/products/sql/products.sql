create table product
(
    id          bigint       not null
        primary key,
    description varchar(255) null,
    image       longtext null,
    name        varchar(255) null,
    price       float        null
);


