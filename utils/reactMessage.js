import { MessageEmbed } from 'discord.js'
import { createReaction } from '../models/analitycs/reactions.js'
import { createGuildConfig, getGuildConfig } from '../models/guilds/config.js'
import currentDate from '../utils/currentDate.js'

const messageContainWord = (words, message) => {
  return words
    .map((word) => {
      let regex = new RegExp('\\b' + word + '\\b', 'g')
      return regex.test(message)
    })
    .reduce((a, b) => a || b)
}

const reactMessage = async (client, message, webhook) => {
  let guildConfig
  let triggeredEmoji = []

  // -------------------- Get guild config --------------------

  guildConfig = await getGuildConfig(message.guild.id)
    .then((guildConfig) => guildConfig[0])
    .catch((err) => console.log('Error while getting the guild config: ', err))

  if (guildConfig == undefined) {
    guildConfig = await createGuildConfig(message.guild.id)
      .then((guildConfig) => guildConfig)
      .catch((err) => console.log('Error while creating the guild config: ', err))
  }

  // -------------------- Reaction --------------------

  const translation = await import(`../lang/${guildConfig.lang}.js`)

  translation.emojis.forEach((emoji) => {
    if (messageContainWord(emoji.words, message.content.toLowerCase())) {
      message.react(emoji.emoji)
      createReaction(emoji.id).catch((err) => console.log('Error while creating the reaction document: ', err))
      triggeredEmoji.push(emoji.emoji)
    }
  })

  // -------------------- Logs --------------------

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
