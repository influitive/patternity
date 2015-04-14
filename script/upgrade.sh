#!/bin/sh

echo "UPGRADING PATTERNITY..."
ulimit -S -n 2048
git pull --rebase
npm install
