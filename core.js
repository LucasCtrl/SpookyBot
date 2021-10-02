import dotenv from 'dotenv'
dotenv.config()

import { Client, Intents, Collection } from 'discord.js'
import fs from 'node:fs/promises'

const config = JSON.parse(await fs.readFile('config.json'))

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })
client.config = config

// -------------------- Webhook --------------------

// TODO: Define log webhook

// -------------------- Command/Event handling --------------------

const cmds = ['aliases', 'commands']
const handlers = ['command', 'event']

cmds.forEach((x) => (client[x] = new Collection()))
// TODO: Add webhook in arguments
handlers.forEach((x) => import(`./handlers/${x}.js`).then((module) => module.default(client)))

// -------------------- Login --------------------

client.login(process.env.TOKEN)
