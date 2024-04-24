const mongoose = require('mongoose');

const userTokenSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
        token: { type: String, required: true },
    },
    { timestamps: true },
  );
  
  const userToken = mongoose.model('userToken', userTokenSchema);
  module.exports = userToken;