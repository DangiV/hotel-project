import mongoose, { model } from "mongoose";

const HotelSchema = mongoose.Schema({
    hName : {
        type : String,
        require : true
    },
    address : {
        type : String,
        require : true
    },
    hotelImg : {
        type : String,
        require : true
    },
    hotelbed : {
        type : String,
        require : true
    },
    hotelpool : {
        type : String,
        require : true
    },
    hotelNumber : {
        type : Number,
        require : true
    }
})

const hotelModel = mongoose.model("newhotel",HotelSchema);

export default hotelModel;