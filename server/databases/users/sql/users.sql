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

INSERT INTO USERS.user (id, birthdate, password, username) VALUES (0, '1999-08-21 02:00:00', 'admin', 'admin');
