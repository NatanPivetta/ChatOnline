let messages = [
    {"text" : "Olá",
     "user": "Kappo",
     "time": "null" },

     {"text" : "Oi, como está?",
     "user": "Joe Doe",
     "time": "null" }
]

//use slice (-10)


function getMessages(){

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

function sendMessage(msg){

    let date = new Date().toJSON();
    let textInput = document.querySelector("#message").value;
    let user = "Kappo";
    msg = {
        "text": textInput,
        "user": user,
        "time": date
    }
    messages.push(msg);
    console.log(messages)
}