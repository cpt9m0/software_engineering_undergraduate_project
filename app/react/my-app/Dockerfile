FROM node:alpine

RUN mkdir my-app
WORKDIR '/my-app'

COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "start"]