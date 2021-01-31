FROM node:8-slim

 WORKDIR /server

COPY package*.json ./

 COPY . /server
 
RUN npm install

EXPOSE 3000
CMD [ "npm", "start" ]