export default {
  command: 'emitgd',

  run: async (client, message) => {
    client.emit('guildDelete', message.guild)
  },
}
