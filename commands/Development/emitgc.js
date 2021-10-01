module.exports = {
  config: {
    command: 'emitgc',
  },

  run: async (client, message) => {
    client.emit('guildCreate', message.guild)
  },
}
