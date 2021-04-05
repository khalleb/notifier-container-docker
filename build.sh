#!/bin/sh

echo "REMOVING node_modules..."
rm -rf node_modules/
echo "node_modules REMOVED!"

echo "--------------------------------"

echo "REMOVING dist..."
rm -rf dist/
echo "dist REMOVED!"

echo "--------------------------------"

echo "INSTALLING DEPENDECIES..."
yarn
echo "DEPENDECIES INSTALLED!"

echo "--------------------------------"

echo "BUILD APLICATION..."
yarn build
echo "BUILD SUCCESS!"

echo "--------------------------------"

echo "RESTARTING SERVER..."
pm2 restart notifier-container-docker
echo "SERVER RESTARTED!"

echo "--------------------------------"

echo "BUILD SUCCESS!!!"
