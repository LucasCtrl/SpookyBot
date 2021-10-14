import dotenv from 'dotenv'
dotenv.config()

import { Client, Intents, Collection, WebhookClient } from 'discord.js'
import fs from 'node:fs/promises'

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
})

const config = JSON.parse(await fs.readFile('config.json'))
client.config = config

// -------------------- Webhook --------------------

const logsWebhook = new WebhookClient({ id: process.env.WEBHOOK_ID, token: process.env.WEBHOOK_TOKEN })

// -------------------- Command/Event handling --------------------

const cmds = ['aliases', 'commands']
const handlers = ['command', 'event']

cmds.forEach((x) => (client[x] = new Collection()))
handlers.forEach((x) => import(`./handlers/${x}.js`).then((module) => module.default(client, logsWebhook)))

// -------------------- Login --------------------

client.login(process.env.TOKEN)
