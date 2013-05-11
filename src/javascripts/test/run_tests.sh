#!/bin/bash

# Call nodejs to execute jasmin-node
$NODE_PATH/bin/node ../../../node_modules/jasmine-node/bin/jasmine-node --verbose --coffee --captureExceptions spec/
