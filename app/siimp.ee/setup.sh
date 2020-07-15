#!/usr/bin/env sh

APP_DIR="${APP_DIRECTORY}/siimp.ee"
mkdir -p $APP_DIR
cp -r app/siimp.ee/static $APP_DIR
cp -r app/siimp.ee/cert $APP_DIR
cp app/siimp.ee/nginx/siimp.ee.conf /etc/nginx/conf.d/

systemcttl reload nginx
