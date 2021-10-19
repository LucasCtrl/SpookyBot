import { MessageEmbed } from 'discord.js'
import { readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { languageCodes as ISOCode } from '../../utils/languageCodes.js'
import { updateGuildConfig } from '../../models/guilds/config.js'

export default {
  command: 'setlang',
  aliases: ['lang'],
  help: {
    name: 'Set language',
    description: 'Change bot default language',
  },

  run: async (client, message, args) => {
    message.delete().catch((err) => console.log('Error while deleting the message: ', err))

    let availableLang = []
    let embed

    // -------------------- Get available languages --------------------

    const __dirname = dirname(fileURLToPath(import.meta.url))
    readdirSync(resolve(__dirname, `../../lang/`))
      .filter((x) => x.endsWith('.js'))
      .forEach((file) => {
        availableLang.push(file.slice(0, -3))
      })

    // -------------------- Display help if no language provided --------------------
    if (args.length == 0) {
      embed = new MessageEmbed()
        .setColor(client.config.colors.primary)
        .setAuthor('How to use the command', client.user.avatarURL())
        .setDescription(`\`${client.config.prefix}setlang <lang>\``)
        .setFooter('This message will be deleted automatically')
    }

    // -------------------- Change language if exist --------------------
    else if (availableLang.find((lang) => lang == args[0])) {
      embed = new MessageEmbed()
        .setColor(client.config.colors.primary)
        .setAuthor('Default language changed', client.user.avatarURL())
        .setDescription(`Language set to: **${args[0]}**`)
        .setFooter('This message will be deleted automatically')

      await updateGuildConfig(message.guild.id, { lang: args[0] }).catch((err) =>
        console.log('Error while updating the guild config: ', err)
      )
    }

    // -------------------- Display help if not exist --------------------
    else {
      let messageDescription = [
        'The requested language does not exist, please choose a language from this list: (the bold part)',
      ]
      availableLang.forEach((lang) =>
        messageDescription.push(`- **${lang}**: ${ISOCode.find((l) => l.code == lang).name}`)
      )

      embed = new MessageEmbed()
        .setColor(client.config.colors.primary)
        .setAuthor('Language not found', client.user.avatarURL())
        .setDescription(messageDescription.join('\n'))
        .setFooter(
          "If you can't find your language, don't hesitate to contact us by using the command boo!support | This message will be deleted automatically"
        )
    }

    message.channel.send({ embeds: [embed] })
      .then((m) => {
        setTimeout(() => m.delete().catch((err) => console.log('Error while deleting the message: ', err)), 20000)
      })
      .catch((err) => console.log('Error while sending the message: ', err))
  },
}
