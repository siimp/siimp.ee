#!/usr/bin/env sh

APP_DIR="${APP_DIRECTORY}/the-coding-love-random.siimp.ee"
echo "--UPDATING ${APP_DIR}--"

git -C $APP_DIR/git pull
cp -rf $APP_DIR/git/* $APP_DIR

systemctl reload nginx

