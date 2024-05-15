const { REST, Routes } = require("discord.js")
const dotenv = require("dotenv");

dotenv.config();
const TOKEN = process.env.TOKEN;
const commands = [
    {
        name: "create",
        description: "Replies with Pong!"
    }
]

const rest = new REST({ version: "10" }).setToken(TOKEN);

(async () => {
    try {
        console.log("start refresing commands")
        await rest.put(Routes.applicationCommands("1239995192958914631"), { body: commands })
    } catch (error) {
        console.log("error-=>", error)
    }
})();