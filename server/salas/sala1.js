

const fs = require('fs');

//use slice (-10)


async function getMessages(){

    messages.forEach(msg => {
        feed = document.getElementById("feed");
        textDiv = document.createElement("div");
        messageDiv = document.createElement("div");
        user = document.createElement("div");

        user.textContent = msg.user + ":";
        textDiv.textContent = msg.text;
        messageDiv.appendChild(user);
        messageDiv.appendChild(textDiv);

        
        

})
feed.appendChild(messageDiv);
};

async function sendMessage(msg){

    let date = new Date().toJSON();
    let textInput = document.querySelector("#message").value;
    let user = "Kappo";
    msg = {
        "text": textInput,
        "user": user,
        "time": date
    }

    const data = fs.readFileSync('messages.json');
    const jsonData = JSON.parse(data);
    jsonData.push(msg);
    fs.writeFileSync('data.json', JSON.stringify(jsonData));

    getMessages();

}