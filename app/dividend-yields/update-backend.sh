#!/usr/bin/env sh

APP_DIR="${APP_DIRECTORY}/dividend-yields.siimp.ee"
echo "--UPDATING ${APP_DIR} BACKEND--"

rm -rf $APP_DIR/backend
mkdir --parent $APP_DIR/backend
cp /home/configurations/dividend-yields/application.properties $APP_DIR/backend/application.properties
cp /home/configurations/dividend-yields/dividend-yields-backend.jar $APP_DIR/backend/dividend-yields-backend.jar


chmod +x $APP_DIR/backend/dividend-yields-backend.jar

