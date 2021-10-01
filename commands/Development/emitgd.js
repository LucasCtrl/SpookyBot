module.exports = {
  config: {
    command: 'emitgd',
  },

  run: async (client, message) => {
    client.emit('guildDelete', message.guild)
  },
}
