# 📬 *DM Friends Script for Discord*

*Welcome to the README for the **DM Friends** script using [vainty.js](https://github.com/vainty-js/Vainty.js)! 🎉 This guide will walk you through how to use the script and make sure you have everything you need to get it running properly.*

## 🚨 *Warning*
***I am not responsible for what you choose to do with this script. Use it at your own risk!*** 🚨

## 📋 *Prerequisites*

> ***Make sure you have [Node.js v22+](https://nodejs.org/fr/download) installed on your PC.***  
> ***Make sure you have [Git](https://git-scm.com/) installed on your PC (needed to download this repo from bash).***

## 🛠️ *Installation*

1. **Clone this repository to your local machine**

    ```bash
    git clone https://github.com/xp-ws/Dm-All-Friends
    ```

2. **Navigate to the project directory**

    ```bash
    cd Dm-All-Friends-main
    ```

3. **Install dependencies**

    ```bash
    npm i ffi-napi
    npm i vainty.js@latest
    ```

## ⚙️ *Configuration*

1. ***Go to the `config.json` file in the project's root directory and add your Discord token along with the message users will receive.***

    ```json
    {
      "token": "User Token Here",
      "txt": "Your Text Here\nYou can use {user} to mention the user in the text."
    }
    ```

## 🚀 *Usage*

*To start the script, use the following command in your terminal :*
```bash
node index.js
```
*Your script should now be online and ready to send private messages to all your friends on Discord. 📨*

## ⚠️ *Disclaimer*

> *This project is provided for educational and research purposes only.*    
> *By using this repository, you acknowledge that :*  
> 
> *You are solely responsible for how you use the code.*  
> *You must comply with Discord’s Terms of Service, Community Guidelines, and all applicable laws.*  
> *The maintainers of this repository do not encourage, endorse, or assume responsibility for any misuse, automation abuse, or violation of platform rules.*  
> *All actions performed with this code are entirely at your own risk.*  
> *If you choose to use this project, you must ensure that your usage is lawful, compliant, and does not harm or disrupt any service or user.*