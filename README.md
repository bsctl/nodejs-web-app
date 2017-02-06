# A simple web server
A simple web server in nodejs. It is intended for demo only.

## Local deployment
On CentOS linux, install latest Nodejs package.

Install git and clone the reposistory

    [root@centos]# yum install -y git
    [root@centos]# git clone https://github.com/kalise/nodejs-web-app
    [root@centos]# cd nodejs-web-app 

Install the dependencies

    [root@centos nodejs-web-app]# npm install

The application return a message as specified into the MESSAGE env variable. Set that variable and start the application
    
    [root@centos nodejs-web-app]# export MESSAGE="Hello World"
    [root@centos nodejs-web-app]# npm start
    > nodejs-web-app@1.0.0 start /root/nodejs-web-app
    > node server.js
    Server listening on: localhost:8080

Open another shell and issue a request against the server

    [root@centos ~]# curl localhost:8080
    Hello World
    
## Docker deployment
A Dockerfile is provided in the reposistory to build a docker image and run the application as linux container.

Install and start Docker

    [root@centos ~]# yum install -y docker
    [root@centos ~]# systemctl start docker
    [root@centos ~]# 

