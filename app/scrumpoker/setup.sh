#!/usr/bin/env sh

echo "--SETTING UP scrumpoker.siimp.ee--"

docker build --tag scrumpocker:latest .
docker run -d -p 8084:80 -e HOST="http://localhost:8084" scrumpocker:latest

cp app/scrumpoker/nginx/scrumpoker.siimp.ee.conf /etc/nginx/conf.d/
systemctl reload nginx
