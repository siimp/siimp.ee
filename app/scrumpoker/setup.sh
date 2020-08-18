#!/usr/bin/env sh

APP_DIR="${APP_DIRECTORY}/scrumpoker.siimp.ee"
echo "--SETTING UP ${APP_DIR}--"

cp app/scrumpoker/nginx/scrumpoker.siimp.ee.conf /etc/nginx/conf.d/
systemctl reload nginx
