#!/usr/bin/env sh

APP_DIR="${APP_DIRECTORY}/basket-watch.siimp.ee"
echo "--UPDATING ${APP_DIR} BACKEND--"

rm -rf $APP_DIR/backend
mkdir --parent $APP_DIR/backend

BUILD_DIR="$APP_DIR/git"
CURRENT_DIR=$(pwd)

cd $BUILD_DIR/backend
git pull
.gradlew assemble jar

cp build/libs/basket-watch-backend-*-all.jar $APP_DIR/backend/basket-watch-backend.jar


chmod +x $APP_DIR/backend/basket-watch-backend.jar
systemctl restart basket-watch-backend

