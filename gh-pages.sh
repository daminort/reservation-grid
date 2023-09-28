#!/bin/bash

DIR=$(pwd)
DIST="$DIR/dist-gh"

npm run build-gh
npx gh-pages -d "$DIST"
