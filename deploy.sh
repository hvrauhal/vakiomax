#!/bin/bash
set -e
s3cmd sync public/* s3://vakiomax.rauhala.me
