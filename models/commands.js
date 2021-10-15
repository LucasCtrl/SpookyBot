import mongoose from 'mongoose'
const { Schema, model } = mongoose

const CommandSchema = new Schema({
  name: String,
  date: { type: Date, default: Date.now },
})

const Command = model('command', CommandSchema)

const createCommand = async (name) => {
  const command = new Command()
  command.name = name
  command.save((err) => {
    if (err) console.log(`Command creation error: ${err}`)
  })
}

export { createCommand }
