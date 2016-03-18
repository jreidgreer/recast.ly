#!/bin/bash

curl -s https://raw.githubusercontent.com/hackreactor-labs/pomander/master/bin/install | bash
bower install
npm install -g live-server

open 'https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi'

live-server client/