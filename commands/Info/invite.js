import { MessageEmbed } from 'discord.js'

export default {
  command: 'invite',
  help: {
    name: 'Invite',
    description: 'Get an invitation link to invite the bot on your server',
  },

  run: async (client, message) => {
    const embed = new MessageEmbed()
      .setColor(client.config.colors.primary)
      .setAuthor('Invitation link', client.user.avatarURL())
      .setDescription(
        'You can click on the following link to add the bot on your server: [https://discord.com/oauth2/authorize?client_id=761568927188123669&scope=bot&permissions=380108139840](https://discord.com/oauth2/authorize?client_id=761568927188123669&scope=bot&permissions=380108139840)'
      )

    message.channel.send({ embeds: [embed] }).catch((err) => console.log('Error while sending the message: ', err))
  },
}
