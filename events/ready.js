import { MessageEmbed } from 'discord.js'
import { createEvent } from '../models/analitycs/events.js'
import currentDate from '../utils/currentDate.js'

export default (client, webhook) => {
  console.log(`I'm online sir!`)

  const embed = new MessageEmbed()
    .setColor(client.config.colors.info)
    .setAuthor('- Back online!', client.user.avatarURL({ dynamic: true }))
    .addField('Informations', `**Prefix:** ${client.config.prefix}\n**Servers:** ${client.guilds.cache.size}`)
    .setFooter(currentDate())

  webhook.send({ embeds: [embed] })
  createEvent('ready').catch((err) => console.log('Error while creating the ready event document: ', err))
}
