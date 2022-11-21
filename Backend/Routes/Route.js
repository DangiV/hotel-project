import express, {Router} from 'express'
import { SignIn, Signup } from '../Controller/admincController.js'
import { getHotel, hotelById, hotelController } from '../Controller/hotelController.js'
import { allRatingShow, rateController } from '../Controller/ratingController.js'

const route = Router(express)

//Admin Routes
route.post('/signup',Signup)
route.post('/signin',SignIn)


//Hotel Routes
route.post('/addhotel',hotelController);
route.get('/gethotel',getHotel);
route.get('/getById/:id',hotelById);



//Rating and feedback Routes
route.post('/addrating',rateController);
route.get('/getRating',allRatingShow);



export default route