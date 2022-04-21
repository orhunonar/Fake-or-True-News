# Fake or True News
 
- Video Link = https://www.loom.com/share/2244316936c14e61aeb5abf71494013b

## Summary

In this project, I write a program that users can says the new is fake or true. Approval rate of new will change according to the number of users who say the new is fake or true. This way, people will be able to spot fake news more easily. The community whic judge the new is fake or true work like a DAO (Decentralized Autonomous Organization). This is the first phase of my project. I will continue to develop this project in the future to make it more efficient and I will add more features.

## Requirements

```
- npm Node.js package manager
- git bash (terminal)
- yarn(npm install -g yarn)
- near-cli
```	

Also, you have to use your testnet account. If you don’t have one - create.

## How to use

You can clone the project from 
    
    ```
    git clone https://github.com/orhunonar/Fake-or-True-News.git
    ```

I used the starter near project as a based of my project. You can find it here:

```	
https://github.com/Learn-NEAR/starter--near-sdk-as
```

- Firstly, you need to run the yarn

```
yarn
```

- Then, you need to install near-cli. Then you should login to your account. (mainnet or testnet)

```
near login
```

- Now you can run the yarn build:relesae
    
```
yarn build:release
```

- In this step, you should  run the command of near deploy. I write my project on "singleton" folder so you should deploy it.

```
near deploy ./build/release/singleton.wasm
```

- We finished our preperation. Now, we can take a look at the functions on index.ts.

### createDailyNews()

This function only can be called by the authorized user. I authorize myself. You need to exchange the "orhun.testnet" account id with your own account id on line 5.

Also, you can change the new on line 6. In this example, the news is: "Elon Musk is going to be the next president of the United States".

### getNewsbyIndex()

This function make able to you see the news on the index. You need to give index 0 because we create only 1 news.

### addMessage()

This function make able to you add a message which fake or true to the news. You can not add a message which is not fake or true. 

If message is true. Approval rate of news will increase. If message is false.Approval rate of news will decrease.

### getApproval()

This function make able to you see the approval rate of the news. If the approval rate is more than 0, the news is likely to be true based on the number of users. If the approval rate is less than 0, the news is likely to be fake based on the number of users.

### getAllMessages()

This function make able to you see all the messages which are added to the news.

### Example Usage

```
yarn

yarn build:release

near login

near deploy ./build/release/singleton.wasm

export CONTRACT=<YOUR_ACCOUNT>

near call $CONTRACT createDailyNews

near view $CONTRACT getNewsByIndex '{"index": 0}'

near call $CONTRACT addMessage '{"text":"fake"}' --accountId=<YOUR_ACCOUNT>

near view $CONTRACT getApproval
```