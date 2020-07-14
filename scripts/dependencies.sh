#!/usr/bin/env sh

C="dnf --assumeyes"

echo "using package manager command \"$C\""

$C update

echo "installing dependencies"

$C install nano
$C install nginx
$C install nodejs
$C install git
