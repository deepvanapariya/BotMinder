const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const dotenv = require("dotenv");

dotenv.config();
const TOKEN = process.env.TOKEN;

client.on('messageCreate', (message) => {
    if (message.author.bot) return;

    if (message.content.startsWith('create')) {
        const url = message.content.split('create')[1];
        return message.reply({
            content: 'Generating Short ID for ' + url,
        })
    }
    message.reply({
        content: "hi from bot!"
    })
})

client.on('interactionCreate', (interaction) => {
    console.log(interaction)
    interaction.reply("PONG!!")
})

client.login(TOKEN)
