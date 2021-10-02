import { readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path, { resolve } from 'node:path'

export default async (client) => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url))
  const events = readdirSync(resolve(__dirname, '../events/')).filter((x) => x.endsWith('.js'))
  for (let file of events) {
    const event = await import(`../events/${file}`)
    let eventName = file.split('.')[0]
    console.log(`Load event: ${eventName}`)
    client.on(eventName, event.default.bind(null, client))
  }
}
