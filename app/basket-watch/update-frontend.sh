#!/usr/bin/env sh

APP_DIR="${APP_DIRECTORY}/basket-watch.siimp.ee"
echo "--UPDATING ${APP_DIR} FRONTEND--"

rm -rf $APP_DIR/static 
mkdir --parent $APP_DIR/static

BUILD_DIR="$APP_DIR/git"
CURRENT_DIR=$(pwd)

cd $BUILD_DIR/frontend
git pull
npm install
npm run build
cp -r dist/* $APP_DIR/static
cd $CURRENT_DIR

systemctl reload nginx

