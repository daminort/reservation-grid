#!/bin/bash

dir=$(pwd)
buildPath="$dir/dist-gh"

npm run build-gh

npx gh-pages -d $buildPath
