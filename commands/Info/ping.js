import { MessageEmbed } from 'discord.js'

export default {
  command: 'ping',

  run: async (client, message) => {
    const beforePing = new MessageEmbed().setColor(client.config.colors.primary).setDescription('Pinging...')

    message.channel.send({ embeds: [beforePing] })
      .then((m) => {
        let ping = m.createdTimestamp - message.createdTimestamp

        const afterPing = new MessageEmbed()
          .setColor(client.config.colors.primary)
          .setDescription(
            `Pong! :ping_pong:\nBot Latency: \`${ping}ms\`, API Latency: \`${Math.round(client.ws.ping)}ms\``
          )

        m.edit({ embeds: [afterPing] })
      })
      .catch((err) => console.log('Error while sending the message: ', err))
  },
}
