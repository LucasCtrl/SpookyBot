const { readdirSync } = require('fs')
const { resolve } = require('path')

module.exports = (client) => {
  const load = (dir) => {
    const commands = readdirSync(resolve(__dirname, `../commands/${dir}`)).filter((x) => x.endsWith('.js'))
    for (let file of commands) {
      const cmd = require(`../commands/${dir}/${file}`)
      client.commands.set(cmd.config.command, cmd)

      console.log(`Load command: ${cmd.config.command}`)

      if (cmd.config.aliases) {
        cmd.config.aliases.forEach((a) => {
          client.aliases.set(a, cmd.config.command)
          console.log(`Load aliases: ${a}`)
        })
      }
    }
  }

  const dirs = ['Info']

  if (process.env.NODE_ENV == 'dev') dirs.push('Development')

  dirs.forEach((dir) => load(dir))
}
