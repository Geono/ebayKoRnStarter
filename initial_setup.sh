#!/bin/bash

npm install
cd ios
pod install
cd ../
react-native link react-native-firebase

