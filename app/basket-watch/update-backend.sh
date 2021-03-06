#!/usr/bin/env sh

APP_DIR="${APP_DIRECTORY}/basket-watch.siimp.ee"
echo "--UPDATING ${APP_DIR} BACKEND--"

rm -rf $APP_DIR/backend
mkdir --parent $APP_DIR/backend

BUILD_DIR="$APP_DIR/git"
CURRENT_DIR=$(pwd)

cd $BUILD_DIR/backend
git pull
chmod +x gradlew
./gradlew assemble jar

echo "stoping backend..."
systemctl stop basket-watch-backend
sleep 3

cp build/libs/basket-watch-backend-*-all.jar $APP_DIR/backend/basket-watch-backend.jar
cp /home/configurations/basket-watch/application.yml $APP_DIR/backend/application.yml

echo "starting backend..."
systemctl start basket-watch-backend

cd $CURRENT_DIR