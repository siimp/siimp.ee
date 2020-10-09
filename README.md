# Server setup
* ssh into the server
* dnf install git
* git clone https://github.com/siimp/siimp.ee.git
* cd siimp.ee
* ./scripts/dependencies.sh

## Apps initial setup
* ./app/siimp.ee/setup.sh
* ./app/boids/setup.sh
* ./app/game-of-life/setup.sh
* ./app/dividend-yields/setup.sh
* ./app/basket-watch/setup.sh
* ./app/the-coding-love-random/setup.sh

## Updating apps

## Adding https to http sites
    sudo certbot --nginx certonly
    select site
    add ssl support manually under /etc/nginx/conf.d/
