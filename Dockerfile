FROM node:8-slim

 WORKDIR /server

COPY package*.json ./
COPY tsconfig.json ./server
COPY tslint*.json ./server

RUN npm install
 COPY ./src /server/src
 COPY ./node_modules /server/node_modules
 COPY ./public /server/public
 
RUN npm install

EXPOSE 3000
CMD [ "npm", "start" ]