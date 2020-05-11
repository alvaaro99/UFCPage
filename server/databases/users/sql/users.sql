create table user
(
    id        bigint       not null
        primary key,
    birthdate datetime(6)  null,
    password  blob         null,
    alias  varchar(255) null,
    gender      char         null,
    name    varchar(100)  not null,
    surname varchar(100) null,
    email     varchar(100) not null,
    constraint user_email_uindex
        unique (email),
    constraint user_username_uindex
        unique (username)
);


INSERT INTO USERS.user (id, alias, birthdate, email, gender, name, password, surname) VALUES (0, 'admin', '1999-08-21 00:00:00', 'admin@admin', 'H', 'admin', '¡êY=ÀaÈcÝh1ˆ\\{€õ†Õ¤½9y_ÑÅübTç…3\\àÍèÚ', 'admin');
