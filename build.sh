#!/bin/sh

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

if [ ! -d "dist" ]; then
  echo "CRIANDO PASTA DIST"
  mkdir dist
fi

VERSION=$(jq -r '.version' package.json)
DATE=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
jq -n --arg version $VERSION --arg dateValue $DATE '{"version" : $version , "created_at" : $dateValue}' > dist/version.json

echo "--------------------------------"

echo "RESTARTING SERVER..."
pm2 restart notifier-container-docker
echo "SERVER RESTARTED!"

echo "--------------------------------"

echo "BUILD SUCCESS!!!"
