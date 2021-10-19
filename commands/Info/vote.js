import { MessageEmbed } from 'discord.js'

export default {
  command: 'vote',
  aliases: ['upvote'],
  help: {
    name: 'Vote',
    description: 'Vote for the bot',
  },

  run: async (client, message) => {
    const embed = new MessageEmbed()
      .setColor(client.config.colors.primary)
      .setAuthor('Support server', client.user.avatarURL())
      .setDescription(
        'You can vote for the bot by clicking on the following link: [https://discordbotlist.com/bots/spookybot/upvote](https://discordbotlist.com/bots/spookybot/upvote)'
      )

    message.channel.send({ embeds: [embed] }).catch((err) => console.log('Error while sending the message: ', err))
  },
}
