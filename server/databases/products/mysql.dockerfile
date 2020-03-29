FROM mysql:5.7

ENV MYSQL_DATABASE PRODUCTS

ENV MYSQL_ROOT_PASSWORD secret

EXPOSE 3306
COPY ./sql/ /docker-entrypoint-initdb.d/
