const { MessageEmbed } = require('discord.js')
const currentDate = require('../utils/currentDate')

module.exports = (client, webhook) => {
  console.log(`I'm online sir!`)

  const embed = new MessageEmbed()
    .setColor(client.config.colors.success)
    .setAuthor('- Back online!', client.user.avatarURL({ dynamic: true }))
    .addField('Informations', `**Prefix:** ${client.config.prefix}\n**Servers:** ${client.guilds.cache.size}`)
    .setFooter(currentDate())

  webhook.send({ embeds: [embed] })
}
