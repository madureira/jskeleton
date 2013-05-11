#!/bin/bash

###
# Start Assets Server
###

# Call nodejs to execute coffeescript 

if [ "$1" == "--production" ]; then
  echo 'Starting server in production mode.'
  NODE_ENV='production' $NODE_PATH/bin/node node_modules/coffee-script/bin/coffee server/server.coffee -n
else
  echo 'Starting server in development mode.'
  $NODE_PATH/bin/node node_modules/coffee-script/bin/coffee server/server.coffee -n
fi
