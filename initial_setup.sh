#!/bin/bash

yarn add
cd ios
pod install
cd ../
react-native link react-native-firebase

