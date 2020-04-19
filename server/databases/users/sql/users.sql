create table user
(
    id        bigint       not null
        primary key,
    birthdate datetime(6)  null,
    password  blob null,
    username  varchar(255) null,
    constraint user_username_uindex
        unique (username)
);

INSERT INTO USERS.user (id, birthdate, password, username) VALUES (1, '1999-08-21 00:00:00', 0xDC80813C87DB4C67FCEC08880D35701A, 'admin');

