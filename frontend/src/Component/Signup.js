import { useForm } from "react-hook-form";
import "../Signup.css";
import axios from "axios";
export default function Signup() {
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
     var dshow =  await axios.post("http://localhost:3040/signup", {
        fName: data.fName,
        email: data.email,
        password: data.password,
      });
      console.log(handleSubmit);
      alert("registered successfully");
    } catch (error) {
      console.log(error);
    }
    reset();

    const content = await dshow.json()
    if(content.message === "registered"){
      alert("registered successfully");

    }
  };

  return (
    <>
      <div id="demo">
        <div>
          <h4>Welcome To Signup Page</h4>
        </div>

        <form onSubmit={handleSubmit(onsubmit)}>
          <div>
            <div>
              <label>Fname</label>
            </div>
            <div>
              <input
                type="text"
                aria-describedby="passwordHelpInline"
                id="fName"
                placeholder="Name"
                name="fName"
                {...register("fName", {
                  required: { value: true, message: "Enter Name" },
                  minLength: { value: 3, message: "Enter minimum 3 Character" },
                  pattern: {
                    value: /[A-Za-z]{3}/,
                    message: "Enter Character only",
                  },
                })}
              />
              {errors.fName && (
                <span>
                  <small style={{ color: "red" }}>
                    {" "}
                    {errors.fName.message}{" "}
                  </small>
                </span>
              )}
            </div>
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
              ></input>
              {errors.password && (
                <small style={{ color: "red" }}>
                  {" "}
                  {errors.password.message}{" "}
                </small>
              )}
            </div>
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </>
  );
}
