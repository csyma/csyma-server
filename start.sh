#!/bin/bash


killall familyfe-challenge.update.sh
./familyfe-challenge.update.sh &

node bin/app.js