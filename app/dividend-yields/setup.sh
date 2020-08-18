#!/usr/bin/env sh

APP_DIR="${APP_DIRECTORY}/dividend-yields.siimp.ee"
echo "--SETTING UP ${APP_DIR}--"
rm -rf $APP_DIR
mkdir --parents $APP_DIR/git

git clone https://github.com/siimp/dividend-yields-frontend.git $APP_DIR/git/frontend
git clone https://github.com/siimp/dividend-yields-scraper.git $APP_DIR/git/backend

./app/dividend-yields/update-frontend.sh 

cp app/dividend-yields/nginx/dividend-yields.siimp.ee.conf /etc/nginx/conf.d/

systemctl reload nginx
