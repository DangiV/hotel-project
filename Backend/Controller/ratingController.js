import ratingModel from "../Model/rating.js";


// Creating Controller of rating and feedback
export const rateController = async(req,res) =>{
    const {rate , feedback} = req.body

    const addRating = await ratingModel.create({rate:rate , feedback :feedback})
    res.status(200).json(addRating);

}

//Controller of showing all rating and feedback 


export const allRatingShow = async(req,res) =>{
    const allRating = await ratingModel.find({})
    res.status(200).json(allRating)
}
