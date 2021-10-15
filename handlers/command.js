import { readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

export default async (client) => {
  const load = async (dir) => {
    const __dirname = dirname(fileURLToPath(import.meta.url))
    const commands = readdirSync(resolve(__dirname, `../commands/${dir}`)).filter((x) => x.endsWith('.js'))
    for (let file of commands) {
      const cmd = await import(`../commands/${dir}/${file}`)
      client.commands.set(cmd.default.command, cmd.default)

      console.log(`Load command: ${cmd.default.command}`)

      if (cmd.default.aliases) {
        cmd.default.aliases.forEach((a) => {
          client.aliases.set(a, cmd.default.command)
          console.log(`Load aliases: ${a}`)
        })
      }
    }
  }

  const dirs = ['Info']

  if (process.env.NODE_ENV == 'dev') dirs.push('Development')

  dirs.forEach((dir) => load(dir))
}
