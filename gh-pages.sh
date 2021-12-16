#!/bin/bash

dir=$(pwd)
examplePath="$dir/example"
buildPath="$examplePath/build"

cd $examplePath
npm run build

npx gh-pages -d $buildPath
