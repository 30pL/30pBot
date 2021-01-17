const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.ODAwNDQ5MTYyNDM2NTQyNTU0.YASSXw.egVGP3MmYOltvbuQfiOj6dj1sTo);//BOT_TOKEN is the Client Secret
