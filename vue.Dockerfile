FROM node:lts-alpine
RUN apk update && apk upgrade && apk add bash

WORKDIR /usr/src

