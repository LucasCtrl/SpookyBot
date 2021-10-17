import { MessageEmbed } from 'discord.js'

export default {
  command: 'help',
  help: {
    name: 'Help',
    description: 'Display the help menu',
  },

  run: async (client, message) => {
    message.delete().catch((err) => console.log('Error while deleting the message: ', err))
    let embed = await new MessageEmbed()
      .setColor(client.config.colors.primary)
      .setFooter(`Requested by ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
      .addField('\u200b', '📍  **INFORMATIONS**', false)
      .addField('Support', 'https://discord.gg/nEDcagb', true)
      .addField('Source code', 'https://github.com/LucasCtrl/SpookyBot', true)
      .addField('🤖 Bot version', '2.0.0', false)
      .addField('\u200b', '📍  **COMMANDS LIST**', false)

    client.commands.forEach((c) => {
      if (c.help) {
        embed.addField(c.help.name, `${c.help.description}\n**Usage: **${client.config.prefix}${c.command}`, false)
      }
    })

    message.author.send({ embeds: [embed] })
  },
}
