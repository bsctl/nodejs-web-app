# Create the image from the latest nodejs
FROM node:7.7.2

MAINTAINER kalise <https://github.com/kalise/>

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

# Declare Env variables
ENV MESSAGE "Hello World!"

# Define the log mount point
VOLUME /var/log

# Expose the port server listen to
EXPOSE 8080
CMD [ "npm", "start" ]
