import { MessageEmbed } from 'discord.js'
import { createReaction } from '../models/reactions.js'
import currentDate from '../utils/currentDate.js'

const emojis = [
  {
    id: 'spookybot',
    emoji: '761602615326146590',
    words: ['spooky'],
  },
  {
    id: 'pumpkin',
    emoji: '🎃',
    words: ['halloween', 'pumpkin'],
  },
  {
    id: 'zombie',
    emoji: '🧟‍♂️',
    words: ['zombie'],
  },
]

const messageContainWord = (words, message) => {
  return words
    .map((word) => {
      let regex = new RegExp('\\b' + word + '\\b', 'g')
      return regex.test(message)
    })
    .reduce((a, b) => a || b)
}

const reactMessage = (client, message, webhook) => {
  let triggeredEmoji = []

  emojis.forEach((emoji) => {
    if (messageContainWord(emoji.words, message.content.toLowerCase())) {
      message.react(emoji.emoji)
      createReaction(emoji.id)
      triggeredEmoji.push(emoji.emoji)
    }
  })

  if (triggeredEmoji.length != 0) {
    const embed = new MessageEmbed()
      .setColor(client.config.colors.primary)
      .setAuthor('- New reaction(s)!', client.user.avatarURL({ dynamic: true }))
      .setDescription(`Emoji(s): ${triggeredEmoji.join(' ')}`)
      .setFooter(currentDate())
    webhook.send({ embeds: [embed] })
  }
}

export default reactMessage
