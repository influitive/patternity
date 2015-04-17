#!/bin/sh

echo "UPGRADING PATTERNITY..."

DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
cd $DIR/..

ulimit -S -n 2048
git pull --rebase
npm install
