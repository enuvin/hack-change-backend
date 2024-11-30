const GigaChat = require('gigachat-node').GigaChat;
require("dotenv").config()

class GigaChat{
    client = ""
    async createToken(){
        console.log(process.env.GIGACHAT_CLIENT_SECRET)
        const client = new GigaChat(process.env.GIGACHAT_CLIENT_ID_BASE64);
        await client.createToken();
        this.client = client
    }
    async getMessage (userMessage){
        const responce = await this.client.completion({
            "model": "GigaChat:latest",
            "messages":[
                {
                    role:"user",
                    contest:userMessage
                }
            ]
        });
        let gigaAnswer = responce.choices[0].message
        console.log("gigaAnswer: ", responce.choices[0].message);
        return gigaAnswer
    }
}

module.exports = new GigaChat()


// const client = new GigaChat(
//     clientSecretKey='CLIENT-SECRET-KEY', 
//     isIgnoreTSL=true,
//     isPersonal=true,
//     autoRefreshToken=true
// );
// await client.createToken();

// const responce = await client.completion({
//     "model":"GigaChat:latest",
//     "messages": [
//         {
//             role:"user",
//             content:"Привет! Как дела?"
//         }
//     ]
// });

// console.log(responce.choices[0].message);