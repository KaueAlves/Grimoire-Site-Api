FROM php:zts-alpine3.9
RUN apk update && apk upgrade && apk add bash && apk add php7-pdo_mysql

WORKDIR /var/www/html
