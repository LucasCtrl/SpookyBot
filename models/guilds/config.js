import mongoose from 'mongoose'
const { Schema, model } = mongoose

const GuildConfigSchema = new Schema({
  _id: String,
  lang: String,
  createdAt: { type: Date, default: Date.now },
})

const GuildConfig = model('guilds-config', GuildConfigSchema)

const createGuildConfig = (id) => {
  return new Promise((resolve, reject) => {
    const config = new GuildConfig()
    config._id = id
    config.lang = 'en'
    config.save((err, result) => {
      if (err) return reject(err)
      resolve(result)
    })
  })
}

const getGuildConfig = (id) => {
  return new Promise((resolve, reject) => {
    GuildConfig.find({ _id: id }, (err, result) => {
      if (err) return reject(err)
      resolve(result)
    })
  })
}

export { createGuildConfig, getGuildConfig }
