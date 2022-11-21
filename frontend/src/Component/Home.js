import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../Home.css'

export default function ShowHotel() {
  const [data, setData] = useState([]);

  const showR = () => {
    axios
      .get("http://localhost:3040/gethotel")
      .then((res) => {
        console.log("rohit"+res.data);
        const mydata = res.data;

        setData(mydata);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    showR();
  }, []);

  return (
    <>
      <div>ShowHotel</div>

      {data.map((hotel) => (
        <div id="first" key={hotel._id} className="card">
          <div className="card">
            <img
             style={{height : "250px"}}
              src={hotel.hotelImg}
              className="card-img-top"
              alt="..."
            />
            <h5 className="card-title">Hotel-Name :- {hotel.hName}</h5>
            <button>
              <Link to={`/hotel/${hotel._id}`}>View-more</Link>

            </button>

          </div>
        </div>
      ))}
    </>
  );
}
