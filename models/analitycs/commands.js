import mongoose from 'mongoose'
const { Schema, model } = mongoose

const AnalitycsCommandSchema = new Schema({
  name: String,
  date: { type: Date, default: Date.now },
})

const AnalitycsCommand = model('analitycs-command', AnalitycsCommandSchema)

const createCommand = async (name) => {
  return new Promise((resolve, reject) => {
    const command = new AnalitycsCommand()
    command.name = name
    command.save((err, result) => {
      if (err) return reject(err)
      resolve(result)
    })
  })
}

export { createCommand }
