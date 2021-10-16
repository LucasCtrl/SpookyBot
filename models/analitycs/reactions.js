import mongoose from 'mongoose'
const { Schema, model } = mongoose

const AnalitycsReactionSchema = new Schema({
  name: String,
  date: { type: Date, default: Date.now },
})

const AnalitycsReaction = model('analitycs-reaction', AnalitycsReactionSchema)

const createReaction = async (name) => {
  return new Promise((resolve, reject) => {
    const reaction = new AnalitycsReaction()
    reaction.name = name
    reaction.save((err, result) => {
      if (err) return reject(err)
      resolve(result)
    })
  })
}

export { createReaction }
