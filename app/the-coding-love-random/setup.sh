#!/usr/bin/env sh


APP_DIR="${APP_DIRECTORY}/the-coding-love-random.siimp.ee"
echo "--SETTING UP ${APP_DIR}--"
mkdir --parents $APP_DIR

git clone https://github.com/siimp/the-coding-love-random $APP_DIR/git
mkdir --parents $APP_DIR
cp $APP_DIR/git/* $APP_DIR

cp app/the-coding-love-random/nginx/the-coding-love-random.siimp.ee.conf /etc/nginx/conf.d/
systemctl reload nginx
