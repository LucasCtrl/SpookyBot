module.exports = {
  config: {
    command: 'ping',
    aliases: ['test'],
  },

  run: async (client, message) => {
    message.reply('Pong')
  },
}