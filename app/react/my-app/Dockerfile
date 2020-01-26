FROM node:alpine

RUN mkdir my-app
WORKDIR '/my-app'

COPY package.json .
COPY . .
RUN npm install
CMD ["npm", "start"]