import axios from 'axios';
import React from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import '../Signin.css'

export default function SignIn() {

  // Code to applay Validation in frontend with the help of useform
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  // code to connect frontend with backend to register api with axios

  const onsubmit = async (data) => {
   try {
    var lshow = await axios.post("http://localhost:3040/signin",{
      email : data.email,
      password : data.password
    })
    console.log(handleSubmit)
    alert("login successfully");   
   } catch (error) {
    console.log(error)
   }


  

  const content = await lshow.json();
  if(content === "login successfully"){
    alert("login successfully");
    nevigate("/", {replace : true})

  }
  else{
    alert("please check password")
  }
  reset();
};
const nevigate = useNavigate();
  return (
    <>
      <div className='first '>
        
        <div>
          <form onSubmit={handleSubmit(onsubmit)}>
            <div>
              <h4>Welcome To SignIn Page</h4>
            </div>
            <div>
              <div className="col-auto">
                <label>Email</label>
              </div>
              <div className="col-auto">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                  {...register("email", {
                    required: { value: true, message: "Enter Email" },
                  })}
                />
                {errors.email && (
                  <small style={{ color: "red" }}> {errors.email.message} </small>
                )}
              </div>
            </div>

            <div>
              <div className="col-auto">
                <label>Password</label>
              </div>
              <div className="col-auto">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  {...register("password", {
                    required: { value: true, message: "Enter Password" },
                    minLength: { value: 3, message: "Enter minimum 3 Character" },
                    maxLength: { value: 8, message: "Enter maximum 8 Character" },
                  })}
                />
                {errors.password && (
                  <small style={{ color: "red" }}>
                    {" "}
                    {errors.password.message}{" "}
                  </small>
                )}
              </div>
            </div>
            <button className="btn btn-success my-3" onClick={()=> nevigate}>Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}
