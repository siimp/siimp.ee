#!/usr/bin/env sh

echo "--SETTING UP scrumpoker.siimp.ee--"

docker build -f app/scrumpoker/Dockerfile --tag scrumpocker:latest app/scrumpoker

docker stop scrumpoker || true
docker rm scrumpoker || true
docker run --name scrumpoker -d --restart=always -p 8084:80 -e HOST="http://scrumpoker.siimp.ee" scrumpocker:latest

cp app/scrumpoker/nginx/scrumpoker.siimp.ee.conf /etc/nginx/conf.d/
systemctl reload nginx
