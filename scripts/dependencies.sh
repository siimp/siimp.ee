#!/usr/bin/env sh

# setting up global variables manually for the first session
./scripts/app_variables.sh

PM="dnf --assumeyes"
INSTALL="$PM install"
ENABLE="$PM module enable"


echo "using package manager command \"$PM\""
$PM update



echo ""; echo ""
echo "--INSTALLING DEPENDENCIES--"
$INSTALL nano
$INSTALL nginx
$INSTALL nodejs
$INSTALL git
$INSTALL java-11-openjdk
$INSTALL certbot python3-certbot-nginx
$ENABLE postgresql:12
$INSTALL postgresql-server
$PM config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
$INSTALL docker-ce docker-ce-cli containerd.io --nobest


echo ""; echo ""
echo "--CONFIGURING SERVICES--"
if [ "$(systemctl is-active nginx)" != "active" ];
then
  echo "starting and enabling nginx"
  systemctl start nginx
  systemctl enable nginx
fi

if [ "$(systemctl is-active postgresql)" != "active" ];
then
  echo "starting and enabling postgresql"
  postgresql-setup --initdb 
  systemctl start postgresql 
  systemctl enable postgresql
fi

if [ "$(systemctl is-active docker)" != "active" ];
then
  echo "starting and enabling docker"
  systemctl start docker
  systemctl enable docker
fi


echo ""; echo ""
echo "--CONFIGURING SYSTEM--"
mkdir -p ${APP_DIRECTORY}
cp scripts/app_variables.sh /etc/profile.d/
cp --force conf/nginx.conf /etc/nginx/nginx.conf 
firewall-cmd --permanent --add-service=http
firewall-cmd --permanent --add-service=https
firewall-cmd --reload



echo ""; echo ""
echo "--DONE--"
