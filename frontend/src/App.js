import Nav from "./Component/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Signup from "./Component/Signup";
import SignIn from "./Component/SignIn";
import HotelS from "./Component/HotelS";
import Review from "./Component/Review";

function App() {
  return (
    <div className="App">
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/hotel/:id" element={<HotelS />} />
          <Route path="/review/:id" element={<Review />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
