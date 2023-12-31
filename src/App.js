import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Navvbar from "./Components/Navvbar";
import Home from "./Home";
import About from "./Components/About";
import Footer from "./Components/Footer";
import JobsListing from "./Components/HomeComp/JobsListing";
import JobsByCategory from "./Components/HomeComp/JobsByCategory";
import CarouselClients from "./Components/HomeComp/CarouselClients";
import JobDetail from "./Components/HomeComp/JobDetail";
import SignUp from "./Components/SignUp";
// import SignIn from "./Components/SignIn";
import PostAJob from "./Components/PostAJob";
import SrchJobByCateg from "./Components/HomeComp/JobCateg/SrchJobByCateg";
function App() {
  return (
    <div className="container-fluid bg-white p-0">
      {/* <div
        className="bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
        id="spinner"
      >
        <div
          className="spinner-border text-primary"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        ></div>
      </div> */}
      <Router>
        <Navvbar></Navvbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route
            path="/joblist/:id"
            element={<JobsListing></JobsListing>}
          ></Route>
          <Route
            path="/jobdetail/:id"
            element={<JobDetail></JobDetail>}
          ></Route>
          <Route
            path="/jobcategory/:id"
            element={<JobsByCategory></JobsByCategory>}
          ></Route>
          <Route
            path="/testimonial/:id"
            element={<CarouselClients></CarouselClients>}
          ></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
          <Route path="/postjob" element={<PostAJob></PostAJob>}></Route>
          <Route
            path="/jobbycateg/:categ"
            element={<JobsListing></JobsListing>}
          ></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
