import { createEmojiRecord } from '../models/analitycs.js'

const emojis = [
  {
    id: 'spookybot',
    emoji: '761602615326146590',
    word: 'spooky',
  },
  {
    id: 'pumpkin',
    emoji: '🎃',
    word: 'halloween',
  },
  {
    id: 'zombie',
    emoji: '🧟‍♂️',
    word: 'zombie',
  },
]

const reactMessage = (message) => {
  let words = message.content.trim().split(' ')

  words.forEach((word) => {
    emojis.forEach((emoji) => {
      if (word.toUpperCase() == emoji.word.toUpperCase()) {
        message.react(emoji.emoji)
        createEmojiRecord(emoji.id)
      }
    })
  })
}

export default reactMessage
