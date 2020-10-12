#!/usr/bin/env sh

APP_DIR="${APP_DIRECTORY}/the-coding-love-random.siimp.ee"
echo "--UPDATING ${APP_DIR}--"

git pull $APP_DIR/git
cp -rf $APP_DIR/git/* $APP_DIR

systemctl reload nginx

