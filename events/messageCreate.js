import { MessageEmbed } from 'discord.js'
import { createCommand } from '../models/analitycs/commands.js'
import reactMessage from '../utils/reactMessage.js'
import currentDate from '../utils/currentDate.js'

export default async (client, webhook, message) => {
  if (message.author.bot) return // Ignore all bots
  if (message.author.id == client.user.id) return // Ignore our bot
  if (message.channel.type == 'dm') return // Ignore DM messages

  // -------------------- Messages with prefix --------------------

  if (message.content.startsWith(client.config.prefix)) {
    // TODO: Include prefix length
    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()

    // Grab the command from the commands collection
    const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command))

    if (!cmd) return

    const embed = new MessageEmbed()
      .setColor(client.config.colors.info)
      .setAuthor('- New command!', client.user.avatarURL({ dynamic: true }))
      .setDescription(`Command: ${client.config.prefix}${command}`)
      .setFooter(currentDate())
    webhook.send({ embeds: [embed] })

    createCommand(cmd.command).catch((err) => console.log('Error while creating the command document: ', err))

    return cmd.run(client, message, args)
  }

  // -------------------- Messages without prefix --------------------

  if (
    message.channel.permissionsFor(client.user).has(['USE_EXTERNAL_EMOJIS']) &&
    message.channel.permissionsFor(client.user).has(['ADD_REACTIONS'])
  ) {
    // Check if the bot has the permission to react and use external emojis
    reactMessage(client, message, webhook)
  }
}
