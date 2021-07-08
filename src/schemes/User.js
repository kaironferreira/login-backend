import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
    name: String,
    email: String,
    username: String,
    password: String,
}, {timestamp:true}
);

export default mongoose.model('users', UserSchema);