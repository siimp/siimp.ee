#!/usr/bin/env sh


APP_DIR="${APP_DIRECTORY}/boids.siimp.ee"
echo "--SETTING UP ${APP_DIR}--"
mkdir --parents $APP_DIR

git clone https://github.com/siimp/boids $APP_DIR/git
mkdir --parents $APP_DIR/static
cp $APP_DIR/git/*.js $APP_DIR/static
cp $APP_DIR/git/*.html $APP_DIR/static

cp app/boids/nginx/boids.siimp.ee.conf /etc/nginx/conf.d/
systemctl reload nginx
