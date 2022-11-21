import adminModel from "../Model/admin.model.js";

// Controller for Register or SignUp

export  const Signup = async(req,res) =>{
const {fName , email , password} = req.body
try {
    const exits =await adminModel.findOne({email:email})
    if(exits){
          res.status(400).json("User already exits")
    }
    else{
        const userdata =await adminModel.create({fName:fName, email:email , password:password})
        res.status(200).json({"message":"registered"})
    }
} catch (error) {
    console.log(error)
}
}


// Controller for Login or SignIn

export const SignIn = async(req,res) =>{
    const {email , password} = req.body
    try {
        const ValidUser =await adminModel.findOne({email:email , password: password})
        if(ValidUser){
            res.status(200).json({"message" : "login successfully"})
        }else{
            res.status(400).json({"message" : "Invalid useremail or password"})

        }
    } catch (error) {
        
    }
}