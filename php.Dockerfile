FROM php:zts-alpine3.9
RUN apk update && apk upgrade && apk add bash

WORKDIR /var/www/html
