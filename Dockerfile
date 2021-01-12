FROM node:lts-alpine

RUN npm install -g @vue/cli
RUN npm install -g node-gyp

WORKDIR /app

COPY package.json ./package.json
RUN yarn cache clean
RUN yarn install

USER node