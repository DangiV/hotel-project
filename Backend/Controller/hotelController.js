import adminModel from "../Model/admin.model.js";
import hotelModel from "../Model/HotelModel.js";


                       //Created hotelDetails in database or controller;

export const hotelController = async (req,res) =>{
 const {hName ,address ,hotelImg, hotelbed, hotelpool, hotelNumber } = req.body

 try {
    const hotelDetails = await hotelModel.create({hName:hName, address:address, hotelImg:hotelImg, hotelbed:hotelbed, hotelpool:hotelpool, hotelNumber:hotelNumber})
    res.status(200).json(hotelDetails);
 } catch (error) {
    console.log(error)
    
 }
}


                           //controller to get all hotel 

export const getHotel = async (req,res) =>{
    const showHotel = await hotelModel.find({});
    res.status(200).json(showHotel)

}


                           //Controller to getById details of details

export const hotelById = async (req,res) =>{
    // const {id} = req.id
    try {
        const HotelById = await hotelModel.findById(req.params.id)
        res.status(200).json(HotelById)
    } catch (error) {
        console.log(error)
    }
}