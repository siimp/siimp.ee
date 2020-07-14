#!/usr/bin/env sh

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
mkdir -p /app



echo ""; echo ""
echo "--DONE--"
