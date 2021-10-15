import { MessageEmbed } from 'discord.js'
import { createEvent } from '../models/events.js'
import currentDate from '../utils/currentDate.js'

export default (client, webhook, guild) => {
  const embed = new MessageEmbed()
    .setColor(client.config.colors.error)
    .setAuthor(
      `- Leave server ${guild.name} with ${guild.memberCount} users!`,
      client.user.avatarURL({ dynamic: true })
    )
    .setFooter(currentDate())

  webhook.send({ embeds: [embed] })
  createEvent('guildDelete')
}
