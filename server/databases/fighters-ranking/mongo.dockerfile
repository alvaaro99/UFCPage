FROM mongo:latest


EXPOSE 27017

COPY ./ranking-seed.js /docker-entrypoint-initdb.d/
