import mongoose from 'mongoose'
const { Schema, model } = mongoose

const AnalitycsEventSchema = new Schema({
  name: String,
  date: { type: Date, default: Date.now },
})

const AnalitycsEvent = model('analitycs-event', AnalitycsEventSchema)

const createEvent = async (name) => {
  return new Promise((resolve, reject) => {
    const event = new AnalitycsEvent()
    event.name = name
    event.save((err, result) => {
      if (err) return reject(err)
      resolve(result)
    })
  })
}

export { createEvent }
