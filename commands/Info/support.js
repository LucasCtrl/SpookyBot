import { MessageEmbed } from 'discord.js'

export default {
  command: 'support',
  help: {
    name: 'Support',
    description: 'Get the invitation link to join the support server',
  },

  run: async (client, message) => {
    const embed = new MessageEmbed()
      .setColor(client.config.colors.primary)
      .setAuthor('Support server', client.user.avatarURL())
      .setDescription(
        'You can click on the following link to join the support server: [https://discord.gg/nEDcagb](https://discord.gg/nEDcagb)'
      )

    message.channel.send({ embeds: [embed] }).catch((err) => console.log('Error while sending the message: ', err))
  },
}
