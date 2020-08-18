#!/usr/bin/env sh

APP_DIR="${APP_DIRECTORY}/basket-watch.siimp.ee"
echo "--SETTING UP ${APP_DIR}--"
mkdir --parents $APP_DIR

git clone https://github.com/siimp/basket-watch.git

cp app/basket-watch/nginx/basket-watch.ee.conf /etc/nginx/conf.d/

systemctl reload nginx
