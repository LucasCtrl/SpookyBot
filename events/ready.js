import { MessageEmbed } from 'discord.js'
import { createEvent } from '../models/analitycs/events.js'
import currentDate from '../utils/currentDate.js'

let statusInterval = 0
if (process.env.NODE_ENV === 'dev') {
  statusInterval = 5000
} else {
  statusInterval = 60000
}

export default (client, webhook) => {
  console.log(
    `Ready to serve ${client.guilds.cache.reduce((mem, g) => (mem += g.memberCount), 0).toLocaleString()} users`
  )

  // -------------------- Bot status --------------------

  setInterval(function () {
    let statuses = [
      `${client.guilds.cache.reduce((mem, g) => (mem += g.memberCount), 0).toLocaleString()} users`,
      `${client.guilds.cache.size.toLocaleString()} servers`,
      `${client.config.prefix}help`,
    ]

    let status = statuses[Math.floor(Math.random() * statuses.length)]
    client.user.setActivity(status, { type: 'WATCHING' })
  }, statusInterval)

  // -------------------- Log message --------------------

  const embed = new MessageEmbed()
    .setColor(client.config.colors.info)
    .setAuthor('- Back online!', client.user.avatarURL({ dynamic: true }))
    .addField('Informations', `**Prefix:** ${client.config.prefix}\n**Servers:** ${client.guilds.cache.size}`)
    .setFooter(currentDate())

  webhook.send({ embeds: [embed] })
  createEvent('ready').catch((err) => console.log('Error while creating the ready event document: ', err))
}
