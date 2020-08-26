#!/usr/bin/env sh

APP_DIR="${APP_DIRECTORY}/basket-watch.siimp.ee"
echo "--UPDATING ${APP_DIR} BACKEND--"

rm -rf $APP_DIR/backend
mkdir --parent $APP_DIR/backend
cp /home/configurations/basket-watch/application.yml $APP_DIR/backend/application.yml
cp /home/configurations/basket-watch/basket-watch-backend.jar $APP_DIR/backend/basket-watch-backend.jar


chmod +x $APP_DIR/backend/basket-watch-backend.jar

