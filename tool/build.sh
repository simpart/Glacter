#!/bin/bash
SCP_DIR=$(cd $(dirname $0);pwd);
WEBPACK=$SCP_DIR/../node_modules/.bin/webpack

echo $($WEBPACK --config $SCP_DIR/../conf/webpack/webpack.config.top.js)
#echo $($SCP_DIR/../node_modules/.bin/webpack) --config $SCP_DIR'/../conf/webpack.config.top.js'
