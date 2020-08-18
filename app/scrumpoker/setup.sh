#!/usr/bin/env sh

echo "--SETTING UP scrumpoker.siimp.ee--"
docker run  --name scrumonline -d -p 8084:80 -e HOST="http://localhost:8084" chrisns/scrumonline:bundled

DOCKER_ID=$(docker ps -aqf "name=scrumonline")
docker cp app/scrumpoker/config.php $DOCKER_ID:/scrumonline/src/config.php
docker cp app/scrumpoker/home.php $DOCKER_ID:/scrumonline/src/templates/home.php 


cp app/scrumpoker/nginx/scrumpoker.siimp.ee.conf /etc/nginx/conf.d/
systemctl reload nginx
