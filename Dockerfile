FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

RUN mkdir db

ENTRYPOINT [ "npm", "start" ]