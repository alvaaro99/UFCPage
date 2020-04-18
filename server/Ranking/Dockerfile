FROM php:7.2.30-apache

RUN apt update
RUN apt install git -y
RUN cd /tmp && curl -sS https://getcomposer.org/installer | php && mv composer.phar /usr/local/bin/composer

RUN pecl install mongodb

COPY ./ /var/www/html/
RUN mv ./src/ ./app/

RUN composer dump-autoload

RUN echo "extension=mongodb.so" >> /usr/local/etc/php/conf.d/docker-php-ext-sodium.ini

