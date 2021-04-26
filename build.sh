#!/bin/sh

if ! type "yarn" > /dev/null; then
  echo "\e[41m INSTALL yarn  \e[0m"
  exit
fi

if ! type "jq" > /dev/null; then
  echo "\e[41m INSTALL jq  \e[0m"
  exit
fi

echo "--------------------------------"
echo "\e[33m REMOVING dist... \e[0m"
rm -rf dist/
echo "\e[32m dist REMOVED! \e[0m"

echo "--------------------------------"

echo "\e[33m INSTALLING DEPENDECIES... \e[0m"
yarn
echo "\e[32m DEPENDECIES INSTALLED! \e[0m"

echo "--------------------------------"

echo "\e[33m BUILD APLICATION... \e[0m"
yarn build
echo "\e[32m BUILD SUCCESS! \e[0m"

echo "--------------------------------"

if [ ! -d "dist" ]; then
  echo "\e[33m CREATING DIST PASTE... \e[0m"
  mkdir dist
fi

VERSION=$(jq -r '.version' package.json)
DATE=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
jq -n --arg version $VERSION --arg dateValue $DATE '{"version" : $version , "created_at" : $dateValue}' > dist/version.json

if type "pm2" > /dev/null; then
  echo "--------------------------------"

  echo "\e[33m RESTARTING SERVER... \e[0m"
  pm2 restart notifier-container-docker
  echo "\e[32m SERVER RESTARTED! \e[0m"

  echo "--------------------------------"
fi

echo "\e[32m --> BUILD FINISH <-- \e[0m"
