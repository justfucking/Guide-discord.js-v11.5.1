const discord = require('discord.js');
const client = new discord.Client();

client.on('ready', message => {
  console.log('I am ready');
});

client.on('message',message => {
          if(message.content === '+ping') {
            message.channel.send('Hi, You pinged me?')
          } else if(message.isMemberMentioned(client.user)) {
                    message.channel.send('How can i help you, btw my prefix is +')
                    }
});

client.on('message', message => {
  if(message.content === '+botinfo') {
    let embed = new discord.RichEmbed()
    .setTitle("BOT INFORMATION") //set title of embed
.setColor("#ff2052") //color of embed
    .setDescription("Bot Info lol") //description of embed
    .addField("LIBRARY", "JavaScript")
    .setThumbnail(`${message.author.avatarURL}`)
    .setFooter(`Command req by ${message.author.username}`, `${message.author.avatarURL}`);
message.channel.send(embed);
  }
});

client.login('NzkwODkzNzU2MDA5NTQ1NzI4.X-HPNQ.-NpnlYDj5-Te0gf5O5lNcgKGDQY');
