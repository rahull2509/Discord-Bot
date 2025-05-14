const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
];

const rest = new REST({ version: "10" }).setToken("MTM3MTkyNDIwMzAwNzExNTQ1NQ.GItk_2.7tN91STSWhIMbkXy_kysAgQVsXVwgZ2kwZ-x50");

(async () => {
    try {
        console.log("Started refreshing application (/) commands.");

        await rest.put(Routes.applicationCommands("1371924203007115455"), {body: commands });

        console.log("Successfully reloaded application (/) commands.");
    } catch (error) {
        console.error(error);
    }
    })
    ();
