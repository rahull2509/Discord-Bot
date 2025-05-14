const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (message) => {
    if(message.author.bot) return; 
  message.reply({
    content: "Hello! I am a Botify",
  });
});

client.on('interactionCreate', (interaction) => {
    console.log(interaction);
    interaction.reply('Pong!!');
});

client.login(
  "MTM3MTkyNDIwMzAwNzExNTQ1NQ.GItk_2.7tN91STSWhIMbkXy_kysAgQVsXVwgZ2kwZ-x50"
);
