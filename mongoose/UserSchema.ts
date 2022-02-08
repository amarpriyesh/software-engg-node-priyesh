import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    username:  String,
    password:  String,
    firstName: String,
    lastName: String,
    email: {type: String},
    profilePhoto: {type: String},
    headerImage: {type: String},
    accountType: {type: String, default: 'PERSONAL', enum: ['PERSONAL', 'ACADEMIC', 'PROFESSIONAL']},
    maritalStatus: {type: String, default: 'SINGLE', enum: ['MARRIED', 'SINGLE', 'WIDOWED']},
    biography: String,
    dateOfBirth: Date,
    joined: {type: Date, default: Date.now},
    location: {
        latitude: {type: Number, default: 0.0},
        longitude: {type: Number, default: 0.0},
    }
}, {collection: 'users'});
export default UserSchema;

