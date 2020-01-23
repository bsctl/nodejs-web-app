# A simple web server
A simple web server in nodejs. It is intended for demo only, no production. A Dockerfile is provided in the reposistory to build a docker image and run the application as linux container.

On CentOS linux, install and start Docker

    [root@centos ~]# yum install -y docker
    [root@centos ~]# systemctl start docker

Install git and clone the reposistory

    [root@centos]# yum install -y git
    [root@centos]# git clone https://github.com/bsctl/nodejs-web-app
    [root@centos]# cd nodejs-web-app

Build a Docker image

    [root@centos nodejs-web-app]# docker build -t nodejs-web-app .
    [root@centos nodejs-web-app]# docker images
    REPOSITORY            TAG                 IMAGE ID            CREATED             SIZE
    nodejs-web-app        latest              e6e0578f5f2d        2 minutes ago       659.6 MB

Start the container by setting the desired answer message in the MESSAGE env variable

    [root@centos]# docker run --name=web -p 80:8080 -d -e MESSAGE="Thanks for all the fish ..." nodejs-web-app
    [root@centos]# curl localhost:80
    Thanks for all the fish ...
