#!/bin/bash

curl -s https://raw.githubusercontent.com/hackreactor-labs/pomander/master/bin/install | bash
bower install
npm install -g live-server

live-server client/