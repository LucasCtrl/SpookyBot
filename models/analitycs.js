import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { Low, JSONFile } from 'lowdb'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Use JSON file for storage
const file = join(__dirname, '../db/analitycs.json')
const adapters = new JSONFile(file)
const db = new Low(adapters)

await db.read()
db.data ||= { events: [], emojiRecords: [] }
db.write()

const createEvent = (name, content) => {
  db.data.events.push({
    eventName: name,
    time: new Date(),
    content: content,
  })
  db.write()
}

const createEmojiRecord = (name) => {
  db.data.emojiRecords.push({
    emoji: name,
    time: new Date(),
  })
  db.write()
}

export { createEvent, createEmojiRecord }
