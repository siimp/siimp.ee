#!/usr/bin/env sh

APP_DIR="${APP_DIRECTORY}/siimp.ee"
echo "--SETTING UP ${APP_DIR}--"

mkdir --parents $APP_DIR

cp --recursive app/siimp.ee/static $APP_DIR
cp app/siimp.ee/nginx/siimp.ee.conf /etc/nginx/conf.d/

systemctl restart nginx
