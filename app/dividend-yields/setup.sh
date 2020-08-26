#!/usr/bin/env sh

APP_DIR="${APP_DIRECTORY}/dividend-yields.siimp.ee"
echo "--SETTING UP ${APP_DIR}--"
rm -rf $APP_DIR
mkdir --parents $APP_DIR/git

git clone https://github.com/siimp/dividend-yields-frontend.git $APP_DIR/git/frontend
git clone https://github.com/siimp/dividend-yields-scraper.git $APP_DIR/git/backend

cp app/dividend-yields/nginx/dividend-yields.siimp.ee.conf /etc/nginx/conf.d/
./app/dividend-yields/update-frontend.sh 

./app/dividend-yields/update-backend.sh 

cp app/dividend-yields/dividend-yields-backend.service /etc/systemd/system
systemctl daemon-reload
systemctl enable dividend-yields-backend
systemctl start dividend-yields-backend
