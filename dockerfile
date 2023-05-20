FROM node:latest

RUN npm install -g ts-node

EXPOSE 3003

CMD [ "node" ]