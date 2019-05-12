#!/usr/bin/env bash

echo "installing prerequisites"

sudo yum -y install python2-certbot-nginx

SITES=("siimp.ee" "game-of-life.siimp.ee" "dividend-yields.siimp.ee" "cart-price.siimp.ee")
echo "sites are $SITES"

LETS_ENCRYPT_DIR=/etc/letsencrypt/live
echo "lets encrypt dir ${LETS_ENCRYPT_DIR}"

sudo certbot --nginx certonly

for site in ${SITES[*]}
do
    echo "copying certificates for ${site}"
    cp "${LETS_ENCRYPT_DIR}/${site}/cert.pem" "/home/sites/${site}/cert/${site}.crt"
    cp "${LETS_ENCRYPT_DIR}/${site}/privkey.pem" "/home/sites/${site}/cert/${site}.key"
done

echo "restarting nginx"

sudo service nginx restart


