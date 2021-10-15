import { MessageEmbed } from 'discord.js'
import { createCommand } from '../models/commands.js'
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

    createCommand(cmd.command)

    return cmd.run(client, message)
  }

  // -------------------- Messages without prefix --------------------

  reactMessage(client, message, webhook)
}
