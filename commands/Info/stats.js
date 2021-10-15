import { MessageEmbed } from 'discord.js'

export default {
  command: 'stats',
  help: {
    name: 'Stats',
    description: 'Give you some statistics about the bot',
  },

  run: async (client, message) => {
    const memoryStats = process.memoryUsage()
    const embed = new MessageEmbed()
      .setColor(client.config.colors.primary)
      .setAuthor(`Stats - ${client.user.username}`, client.user.avatarURL({ dynamic: true }))
      .addField('Number of servers ¬', client.guilds.cache.size.toLocaleString(), true)
      .addField(
        'Number of users ¬',
        client.guilds.cache.reduce((mem, g) => (mem += g.memberCount), 0).toLocaleString(),
        true
      )
      .addField('Number of emojis ¬', client.emojis.cache.size.toLocaleString(), true)
      .addField('Number of channels ¬', client.channels.cache.size.toLocaleString(), true)
      .addField('Memory usage ¬', `${Math.ceil(memoryStats.heapUsed / 1048576)} Mo`, true)
      .setFooter(`Requested by ${message.author.username}`, message.author.avatarURL({ dynamic: true }))

    message.channel.send({ embeds: [embed] })
  },
}
