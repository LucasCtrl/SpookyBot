require('dotenv').config()

const { Client, Intents, Collection } = require('discord.js')
const config = require('./config.json')

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })
client.config = config

// -------------------- Webhook --------------------

// TODO: Define log webhook

// -------------------- Command/Event handling --------------------

const cmds = ['aliases', 'commands']
const handlers = ['command', 'event']

cmds.forEach((x) => (client[x] = new Collection()))
// TODO: Add webhook in arguments
handlers.forEach((x) => require(`./handlers/${x}`)(client))

// -------------------- Login --------------------

client.login(process.env.TOKEN)
