import { readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path, { resolve } from 'node:path'

export default async (client) => {
  const load = async (dir) => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url))
    const commands = readdirSync(resolve(__dirname, `../commands/${dir}`)).filter((x) => x.endsWith('.js'))
    for (let file of commands) {
      const cmd = await import(`../commands/${dir}/${file}`)
      client.commands.set(cmd.default.config.command, cmd.default)

      console.log(`Load command: ${cmd.default.config.command}`)

      if (cmd.default.config.aliases) {
        cmd.default.config.aliases.forEach((a) => {
          client.aliases.set(a, cmd.default.config.command)
          console.log(`Load aliases: ${a}`)
        })
      }
    }
  }

  const dirs = []

  if ((process.env.NODE_ENV = 'dev')) dirs.push('Development')

  dirs.forEach((dir) => load(dir))
}
