const { readdirSync } = require('fs')
const { resolve } = require('path')

module.exports = (client) => {
  const events = readdirSync(resolve(__dirname, '../events/')).filter((x) => x.endsWith('.js'))
  for (let file of events) {
    const event = require(`../events/${file}`)
    let eventName = file.split('.')[0]

    console.log(`Load event: ${eventName}`)

    client.on(eventName, event.bind(null, client))
  }
}
