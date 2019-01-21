const Discord = require('discord.js');
const auth = require('./auth.json');
const config = require('./config.json');

const bot = new Discord.Client();

bot.on('ready', function() {
    console.log("Bot is ready!");
});

bot.on('message', function(message) {
    
    // ignore messages sent via direct message
    if (message.channel.type === "dm") {
        return;
    }
    
    // ignore messages sent from another bot
    if (message.author.bot) {
        return;
    }
    
    // check if the message is a command (starting with the command prefix '$')
    if (message.content.startsWith(config.prefix)) {
        
        // create an array that contains command name and arguments
        // ".slice(config.prefix.length)" removes the prefix
        // ".split(' ')" splits the message at spaces and puts the words
        // into separate array entries
        let content = message.content.slice(config.prefix.length).split(' ');
        
        let num_arguments = content.length;
        
        // check for the special case that a simple "$" was written with no command
        if (num_arguments == 0) {
            return;
        }
        
        // now we can identify the command
        let command = content[0];
        
        if (command === "hey") {
            // check if there is a second argument that says "me"
            if ((num_arguments > 1) && (content[1] === "me")) {
                // ".reply" prepends an "@User," to the message,
                // where User is the message's author
                message.reply("Hey there crocodile!");
                return;
            }
            
            // this just sends a normal message in the chat
            message.channel.send("Hey there crocodile!");
            return;
        }
        
        // add more commands here!
    }
});

bot.login(auth.token);
