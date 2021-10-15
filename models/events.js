import mongoose from 'mongoose'
const { Schema, model } = mongoose

const EventSchema = new Schema({
  name: String,
  date: { type: Date, default: Date.now },
})

const Event = model('event', EventSchema)

const createEvent = async (name) => {
  const event = new Event()
  event.name = name
  event.save((err) => {
    if (err) console.log(`Event creation error: ${err}`)
  })
}

export { createEvent }
