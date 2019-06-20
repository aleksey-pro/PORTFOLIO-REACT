const mongoose = require('mongoose');

const { Schema } = mongoose;

const blogSchema = new Schema({
  userId: { type: String, required: true },
  slug: { type: String, unique: true, sparse: true }, // уникальный идентификатор записи блога, уникален, не null
  title: { type: String, required: true, maxlength: 96 },
  subTitle: { type: String, required: true },
  story: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  status: { type: String, default: 'draft' },
  author: { type: String, required: true },
});

module.exports = mongoose.model('Blog', blogSchema);
