import mongoose from "mongoose";

const ratingSchema = mongoose.Schema({
    feedback : {
        type : String,
        require : true
    },

    rate : {
        type : Number,
        require : true
    }
})

const ratingModel = mongoose.model("newRating",ratingSchema)

export default ratingModel;