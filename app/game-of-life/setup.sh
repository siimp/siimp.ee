#!/usr/bin/env sh

APP_DIR="${APP_DIRECTORY}/game-of-life.siimp.ee"
echo "--SETTING UP ${APP_DIR}--"

mkdir --parents $APP_DIR

git clone https://github.com/siimp/game-of-life.git $APP_DIR/git
mkdir --parents $APP_DIR/static
cp $APP_DIR/git/*.js $APP_DIR/static
cp $APP_DIR/git/*.html $APP_DIR/static

cp app/game-of-life/nginx/game-of-life.siimp.ee.conf /etc/nginx/conf.d/
systemctl reload nginx
