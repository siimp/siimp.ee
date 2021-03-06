#!/usr/bin/env sh

echo "--SETTING UP scrumpoker.siimp.ee--"

docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
docker run -d -p 8084:80 -e HOST="http://localhost:8084" chrisns/scrumonline:bundled

DOCKER_ID=$(docker ps -a -q)
docker cp app/scrumpoker/config.php $DOCKER_ID:/scrumonline/src/config.php
docker cp app/scrumpoker/home.php $DOCKER_ID:/scrumonline/src/templates/home.php 
docker cp app/scrumpoker/member.php $DOCKER_ID:/scrumonline/src/templates/member.php 
docker cp app/scrumpoker/resources $DOCKER_ID:/scrumonline/src/


cp app/scrumpoker/nginx/scrumpoker.siimp.ee.conf /etc/nginx/conf.d/
systemctl reload nginx
