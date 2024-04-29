import mongoose from "mongoose";

const UserScheme = mongoose.Schema(
    {
        _id: mongoose.Types.ObjectId,
        username:{
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        profilePicture: String,
        coverPicture: String,
        about: String,
        livesIn: String,
        worksAt: String,
        followers: [],
        following: []
    },
    {timestamps: true}
)

const UserModel = mongoose.model("users", UserScheme);
export default UserModel