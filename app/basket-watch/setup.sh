#!/usr/bin/env sh

APP_DIR="${APP_DIRECTORY}/basket-watch.siimp.ee"
echo "--SETTING UP ${APP_DIR}--"
rm -rf $APP_DIR
mkdir --parents $APP_DIR/git

git clone https://github.com/siimp/basket-watch.git $APP_DIR/git/frontend
git clone https://github.com/siimp/basket-watch-backend.git $APP_DIR/git/backend

./app/basket-watch/update-frontend.sh 

cp app/basket-watch/nginx/basket-watch.siimp.ee.conf /etc/nginx/conf.d/

systemctl reload nginx
