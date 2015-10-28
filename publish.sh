#!/usr/bin/env bash

# AWS_ACCESS_KEY_ID=set-from-circle
# AWS_SECRET_ACCESS_KEY=set-from-cirle
BUCKET="patternity.internal.influitive.com"
DIR="infl-patternlab/public"

aws s3 sync $DIR s3://$BUCKET/

BUCKET_EXPERIMENTAL="patternity.experimental.influitive.com"
DIR_EXPERIMENTAL="styleguide/public"

aws s3 sync $DIR_EXPERIMENTAL s3://$BUCKET_EXPERIMENTAL/
