const { MessageEmbed } = require('discord.js')
const currentDate = require('../utils/currentDate')

module.exports = (client, webhook, guild) => {
  const embed = new MessageEmbed()
    .setColor(client.config.colors.error)
    .setAuthor(
      `- Leave server ${guild.name} with ${guild.memberCount} users!`,
      client.user.avatarURL({ dynamic: true })
    )
    .setFooter(currentDate())

  webhook.send({ embeds: [embed] })
}
