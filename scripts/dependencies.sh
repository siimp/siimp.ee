#!/usr/bin/env sh

# setting up global variables manually for the first session
./centos/app_variables.sh

PM="dnf --assumeyes"
INSTALL="$PM install"


echo "using package manager command \"$PM\""
$PM update



echo ""; echo ""
echo "--INSTALLING DEPENDENCIES--"
$INSTALL nano
$INSTALL nginx
$INSTALL nodejs
$INSTALL git
$INSTALL java-11-openjdk


echo ""; echo ""
echo "--CONFIGURING SERVICES--"
if [ "$(systemctl is-active nginx)" != "active" ];
then
  echo "starting and enabling nginx"
  systemctl start nginx
  systemctl enable nginx
fi



echo ""; echo ""
echo "--CONFIGURING SYSTEM--"
mkdir -p ${APP_DIRECTORY}
cp --no-clobber centos/app_variables.sh /etc/profile.d/



echo ""; echo ""
echo "--DONE--"
