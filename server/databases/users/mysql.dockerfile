FROM mysql:5.7

ENV MYSQL_DATABASE USERS

ENV MYSQL_ROOT_PASSWORD secret

COPY ./sql/ /docker-entrypoint-initdb.d/

EXPOSE 3306

