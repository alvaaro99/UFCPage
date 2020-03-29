create table user
(
    id        bigint       not null
        primary key,
    birthdate datetime(6)  null,
    password  varchar(255) null,
    username  varchar(255) null
);

INSERT INTO USERS.user (id, birthdate, password, username) VALUES (0, '1999-08-21 02:00:00', 'admin', 'admin');
