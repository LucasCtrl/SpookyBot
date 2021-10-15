import { MessageEmbed } from 'discord.js'
import { createReaction } from '../models/reactions.js'
import currentDate from '../utils/currentDate.js'

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

const reactMessage = (client, message, webhook) => {
  let words = message.content.trim().split(' ')

  words.forEach((word) => {
    emojis.forEach((emoji) => {
      if (word.toUpperCase() == emoji.word.toUpperCase()) {
        message.react(emoji.emoji)

        const embed = new MessageEmbed()
          .setColor(client.config.colors.primary)
          .setAuthor('- New reaction!', client.user.avatarURL({ dynamic: true }))
          .setDescription(`Emoji: ${emoji.emoji}`)
          .setFooter(currentDate())
        webhook.send({ embeds: [embed] })

        createReaction(emoji.id)
      }
    })
  })
}

export default reactMessage
