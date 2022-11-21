import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function RatingForm() {
  const [body, setBody] = useState({
    rate: "",
    feedback: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value= e.target.value;
    setBody({
      ...body,
      [name]: value,
    });
    console.log("body", body);
    
  };



  // Connecting to backend with axios to store feedback and rating of hotel


  const handleSubmit = async (e) => {
    try {
      console.log("onSubmit");
      const data = await axios.post("http://localhost:3040/addrating", {
        rate: body.rate,
        feedback: body.feedback,
      });
      console.log("data", data);
    } catch (error) {
      console.log(error);
    }
  };


  // Code of showing hotel pic and name of hotel 

const id = useParams()
const _id = id.id


const [hdata, setHdata] = useState([])

const showH = () =>{
    axios.get(`http://localhost:3040/getById/${_id}`).then((res)=>{
        const hoteladd = res.data

        setHdata(hoteladd)
    }).catch((error)=>{
  console.log(error)
    })
}

useEffect(()=>{
    showH()
},[])


  return (
    <>
            {/* Displaying hotel image and hotelname to User */}
            <div className="card" key={hdata._id}>
        <div className="d-flex justify-content-center">
          <img
            style={{ width: "550px" }}
            src={hdata.hotelImg}
            className="card-img-top"
            alt="..."
          />
       
        </div>

        <div className="card-body">
          <h5 className="card-title">Hotel-Name :- {hdata.hName}</h5>
         
        </div>
     
      </div>




    {/* Taking rating and feedback from user to store in backend  */}

      <form>
       <div className="d-flex align-items-center flex-column mb-3 mt-3" style={{height : "200px"}}> 
       <span><h3>Give Your Feedback and Review here!!!!</h3></span>
            <div >
              <label>Enter FeedBack</label>
            </div>
            <div className=" mt-2" >
              <input
                type="text"
                aria-describedby="passwordHelpInline"
                id="feedback"
                placeholder="enter feedback"
                name="feedback"
                onChange={handleChange}              />
            </div>
         

        <div className="dropdown mt-3" >
          <h5>Select Rating</h5>
          <select name="rate" onChange={handleChange}>
            <option value="">select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
       
        <button
          type="button"
          className="btn btn-success mt-3"
          onClick={handleSubmit}
        >
          Submit
        </button>
        </div>
      </form>
    </>
  );
}
