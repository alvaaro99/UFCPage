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


INSERT INTO USERS.user (id, birthdate, password, alias, gender, name, surname, email) VALUES (1, '1999-08-21', 0xDC80813C87DB4C67FCEC08880D35701A, 'admin', null, 'Admin', 'Admin', 'admin@admin.com');
