const { Schema, model } = require('../connection');

const userSchema = new Schema({
    name: String,
    email: {type: String, unique: true},
    password: {type: String, required: true},
    city: {type: String, default: 'Unknown'},
    createdAt: {type: Date, default: Date.now}
});

module.exports = model('Users', userSchema);
// The model is named 'Users' and the collection will be 'users' in MongoDB