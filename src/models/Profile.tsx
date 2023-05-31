import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
    {
    name: String,
    username: String,
    job: String,
    image: String,
    phone: String,
    email: String,
    about: String,
    interests: [String],
    socials: {type: Map, of: String},
    skills: [String],
}
);

export default mongoose.models.Profile || mongoose.model('Profile', profileSchema);