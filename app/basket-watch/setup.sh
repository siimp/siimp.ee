#!/usr/bin/env sh

APP_DIR="${APP_DIRECTORY}/basket-watch.siimp.ee"
echo "--SETTING UP ${APP_DIR}--"
rm -rf $APP_DIR
mkdir --parents $APP_DIR/git

git clone https://github.com/siimp/basket-watch.git $APP_DIR/git/frontend
git clone https://github.com/siimp/basket-watch-backend.git $APP_DIR/git/backend


cp app/basket-watch/nginx/basket-watch.siimp.ee.conf /etc/nginx/conf.d/
./app/basket-watch/update-frontend.sh 


./app/basket-watch/update-backend.sh 

cp app/basket-watch/basket-watch-backend.service /etc/systemd/system
systemctl daemon-reload
systemctl enable basket-watch-backend
systemctl start basket-watch-backend
