import mongoose, { Schema } from 'mongoose';

const chatSchema = new Schema({
  room: {
    type: Schema.ObjectId,
    ref: 'Room',
    required: 'Room is required',
  },

  title: String,
  description: String,

  github: String,

  firstMessage: Date,
  lastMessage: Date,

  stickies: [{
    type: Schema.ObjectId,
    ref: 'Message',
  }],
}, { timestamps: true });

const Chat = mongoose.model('Chat', chatSchema);

export default Chat;