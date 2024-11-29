FROM node:16.17.0

COPY . /reja
WORKDIR /reja
CMD npm install && node server.js




#DOCKERFILE => DOCKER IMAGE => direct docer: CONTAINER
#DOCKERFILE => DOCKER IMAGE => docer-compose: CONTAINER