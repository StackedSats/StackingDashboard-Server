FROM node:14-stretch-slim

USER node

RUN mkdir /home/node/src

WORKDIR /home/node/src/

COPY --chown=node:node package.json package-lock.json ./

RUN npm ci

COPY --chown=node:node . .

CMD ["node","index.js"]