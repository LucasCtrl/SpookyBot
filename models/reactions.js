import mongoose from 'mongoose'
const { Schema, model } = mongoose

const ReactionSchema = new Schema({
  name: String,
  date: { type: Date, default: Date.now },
})

const Reaction = model('reaction', ReactionSchema)

const createReaction = async (name) => {
  const reaction = new Reaction()
  reaction.name = name
  reaction.save((err) => {
    if (err) console.log(`Reaction creation error: ${err}`)
  })
}

export { createReaction }
