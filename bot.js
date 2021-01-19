const Discord = require ('discord.js'); 

const klient = nový Discord.Client (); 

 

client.on ('ready', () => { 

    console.log ('I am ready!'); 

}); 

 

client.on ('message', message => { 

    if (message.content === 'ping') { 

       message.reply ('pong'); 

       } 

}); 

 

// TOTO MUSÍ BÝT 

TAKTO WAY client.login (process.env.BOT_TOKEN); // BOT_TOKEN je tajemství klienta
