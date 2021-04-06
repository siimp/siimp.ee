#!/usr/bin/env sh

APP_DIR="${APP_DIRECTORY}/dividend-yields.siimp.ee"
echo "--UPDATING ${APP_DIR} BACKEND--"


rm -rf $APP_DIR/backend
mkdir --parent $APP_DIR/backend

BUILD_DIR="$APP_DIR/git"
CURRENT_DIR=$(pwd)

cd $BUILD_DIR/backend
git pull
chmod +x gradlew
./gradlew bootJar

echo "stoping backend..."
systemctl stop dividend-yields-backend
sleep 3

cp build/libs/dividend-yields-*.jar $APP_DIR/backend/dividend-yields-backend.jar
chmod +x $APP_DIR/backend/dividend-yields-backend.jar
cp /home/configurations/dividend-yields/application.properties $APP_DIR/backend/application.properties

echo "starting backend..."
systemctl start dividend-yields-backend

cd $CURRENT_DIR