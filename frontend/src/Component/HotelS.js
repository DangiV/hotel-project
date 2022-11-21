import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function HotelS() {
  const id = useParams();
  const _id = id.id;
  const [data, setData] = useState([]);

  // conntectin to backend with axios to show details on UI

  const HotelIds = () => {
    axios
      .get(`http://localhost:3040/getById/${_id}`)
      .then((res) => {
        // console.log(res.data);
        const hotelData = res.data;
        setData(hotelData);
        // console.log(hotelData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    HotelIds();
  }, []);

  //connecting to backend to show all rating and feedback of user by given them

  const [rating, setRating] = useState([]);

  const showRating = () => {
    axios
      .get("http://localhost:3040/getRating")
      .then((res) => {
        //  console.log(res.data)
        const ratingData = res.data;

        setRating(ratingData);
        console.log(ratingData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    showRating();
  }, []);
  return (
    <>
      {/* show data of hotels which is stored by us in backend */}

      <div className="card" key={data._id}>
        <div className="d-flex justify-content-center">
          <img
            style={{ height: "340px" }}
            src={data.hotelbed}
            className="card-img-top"
            alt="..."
          />
          <img
            style={{ height: "340px" }}
            src={data.hotelpool}
            className="card-img-top"
            alt="..."
          />
        </div>

        <div className="card-body ">
          <h5 className="card-title">Hotel-Name :- {data.hName}</h5>
          <h5 className="card-title">Hotel-Address :- {data.address}</h5>
          <h5 className="card-title">Hotel-Number :- {data.hotelNumber}</h5>
        </div>
      </div>

      {/* Showing of User rating and feedback of all user...... */}

      <div>
        <h3>Previous Rating of users</h3>
      </div>

      <table className="table table-dark table-striped">
        <thead >
          <tr >
            <th>Rating</th>
            <th>FeedBack</th>
          </tr>
        </thead>
        <tbody>
          {rating.map((ratingSU) => (
            <tr key={rating._id}>
              <td>{ratingSU.feedback}</td>
              <td>{ratingSU.rate}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div
        className="d-flex justify-content-center btn btn-success"
        style={{ height: "80px" }}>
        <button>
          <Link to={`/review/${data._id}`}>Review-Here</Link>
        </button>
      </div>
    </>
  );
}
