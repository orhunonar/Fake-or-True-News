#!/bin/bash
npm install -g near-cli
yarn
near login
yarn build:release  
near dev-deploy ./build/release/singleton.wasm
export CONTRACT=$account_id
near call $CONTRACT createDailyNews
near view $CONTRACT getNewsByIndex '{"index": 0}'
near call $CONTRACT addMessage '{"text":"fake"}' --accountId=$account_id
near view $CONTRACT getApproval