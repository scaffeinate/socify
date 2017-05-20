#!/bin/bash -i
bundle install

if [[ $1 = "prod" ]]; then
   echo "Using Procfile. Starting foreman for prod..."
   foreman start -f Procfile
else
  echo "Using Procfile.dev. Starting foreman for dev..."
  foreman start -f Procfile.dev
fi
