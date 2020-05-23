FROM openjdk:11.0.7-slim

COPY ./ /var/products
WORKDIR /var/products

RUN tar xzvf ./src/main/resources/libs/apache-maven-3.6.3-bin.tar.gz

RUN ./apache-maven-3.6.3/bin/mvn package

ENTRYPOINT ["java","-jar","target/RestProduct-0.0.1-SNAPSHOT.jar"]