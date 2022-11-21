import mongoose from 'mongoose'

const adminSchema = mongoose.Schema({
    fName :{
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    password : {
        type : Number,
        require : true
    }
})

const adminModel = mongoose.model("newadmin", adminSchema)

export default adminModel