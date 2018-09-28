FROM node:8.11.3-alpine

LABEL maintainer="The Coding Ground"

RUN mkdir -p /var/src

WORKDIR /var/src

ADD package.json package.json

RUN npm install --production

ADD . .

WORKDIR /var/src

EXPOSE 3003

CMD ["node", "app.js"]