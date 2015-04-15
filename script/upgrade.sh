#!/bin/sh

echo "UPGRADING PATTERNITY..."
ulimit -S -n 2048
git pull --rebase
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
bundle install --path=$DIR
npm install
