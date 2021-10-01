require('dotenv').config()

const { Client, Intents, Collection, WebhookClient } = require('discord.js')
const config = require('./config.json')

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
})
client.config = config

// -------------------- Webhook --------------------

const logsWebhook = new WebhookClient({ id: process.env.WEBHOOK_ID, token: process.env.WEBHOOK_TOKEN })

// -------------------- Command/Event handling --------------------

const cmds = ['aliases', 'commands']
const handlers = ['command', 'event']

cmds.forEach((x) => (client[x] = new Collection()))
handlers.forEach((x) => require(`./handlers/${x}`)(client, logsWebhook))

// -------------------- Login --------------------

client.login(process.env.TOKEN)
