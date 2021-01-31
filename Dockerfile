FROM node:8-slim

 WORKDIR /server

COPY package*.json ./
COPY ts*.json ./

 COPY . /server
 
RUN npm install\
        && npm install tsc -g

EXPOSE 3000
CMD [ "npm", "start" ]