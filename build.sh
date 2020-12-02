#!/bin/bash
rm -Rf node_modules
rm -Rf ./build
npm install
npm run build
