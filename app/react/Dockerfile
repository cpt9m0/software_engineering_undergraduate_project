FROM node:12.2.0-alpine

# set working directory
RUN mkdir /my-app
WORKDIR /my-app
COPY ./my-app /my-app

ENV PATH /my-app/$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent

# start app
CMD ["npm", "start"]