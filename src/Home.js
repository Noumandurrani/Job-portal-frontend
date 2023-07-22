import React, { useRef } from "react";
import job2 from "./Components/Images/job2.jpeg";
import job3 from "./Components/Images/job3.jpeg";
import { Carousel } from "react-bootstrap";
function Home() {
  return (
    <div className="container-xxxl bg-white sticky-top" style={{}}>
      {/* ///////////////////////////Carousel///////////////////////////////////// */}
      <Carousel
        className="carousel"
        slide
        nextIcon={
          <i
            className="d-flex justify-content-center rounded border p-2 fa fa-arrow-right"
            style={{ backgroundColor: "" }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#139c49";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "";
            }}
          ></i>
        }
        prevIcon={
          <i
            className="rounded p-2 fa fa-arrow-left"
            style={{
              backgroundColor: "",
              border: "1px solid",
              transition: "0s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#139c49";
              e.target.style.border = 0;
              e.target.style.transition = "0.6s ease";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "";
              e.target.style.border = "1px solid";
              e.target.style.transition = "0.6s ease";
            }}
          ></i>
        }
      >
        <Carousel.Item className="slide" interval={1500}>
          <div
            className="row text-light"
            style={{
              backgroundImage: `url(${job2})`,
              backgroundSize: "100% 100%",
              height: "600px",
              position: "relative",
            }}
          >
            <div
              className="col-lg-8 position-absolute d-flex flex-column justify-content-center"
              style={{
                top: "12%",
                left: "15%",
                borderLeft: "20px solid #139c49",
                paddingLeft: "40px",
                paddingTop: "40px",
                paddingBottom: "40px",
                borderTop: "20px solid",
              }}
            >
              <h1 className="display-3 fw-bolder " style={{ fontSize: "70px" }}>
                Find The Perfect Job That You Deserved
              </h1>
              <p className="fs-5 mt-4">
                Lorem ipsum is a placeholder text commonly used to demonstrate
                the visual form of a document or a typeface without relying on
                meaningful content
              </p>
              <div className="d-flex mt-4">
                <button className=" btn btn-success rounded-0 px-5 pt-3 pb-3 fs-6">
                  Search A Job
                </button>
                <button className="btn btn-primary ms-4 rounded-0 px-5 pt-3 pb-3 fs-6">
                  Find A Talent
                </button>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="slide">
          <div
            className="row text-light"
            style={{
              backgroundImage: `url(${job3})`,
              backgroundSize: "100% 100%",
              height: "600px",
              position: "relative",
            }}
          >
            <div
              className="col-lg-8 position-absolute d-flex flex-column justify-content-center"
              style={{
                top: "12%",
                left: "15%",
                borderLeft: "20px solid #139c49",
                paddingLeft: "40px",
                paddingTop: "40px",
                paddingBottom: "40px",
                borderTop: "20px solid",
              }}
            >
              <h1 className="display-3 fw-bolder " style={{ fontSize: "70px" }}>
                Find The Best Startup Job That Fit You
              </h1>
              <p className="fs-5 mt-4">
                Lorem ipsum is a placeholder text commonly used to demonstrate
                the visual form of a document or a typeface without relying on
                meaningful content
              </p>
              <div className="d-flex mt-4">
                <button className=" btn btn-success rounded-0 px-5 pt-3 pb-3 fs-6">
                  Search A Job
                </button>
                <button className="btn btn-primary ms-4 rounded-0 px-5 pt-3 pb-3 fs-6">
                  Find A Talent
                </button>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      {/* //////////////////////////////////////////////////////////////// */}
      {/* <br></br>
      <br></br>
      <br></br>
      <br></br> */}

      {/* <div
        className="row text-light"
        style={{
          backgroundImage: `url(${aa})`,
          backgroundSize: "100% 100%",
          height: "600px",
          position: "relative",
        }}
      >
        <div
          className="col-lg-8 position-absolute d-flex flex-column justify-content-center"
          style={{
            top: "12%",
            left: "15%",
            borderLeft: "20px solid #139c49",
            paddingLeft: "40px",
            paddingTop: "40px",
            paddingBottom: "40px",
            borderTop: "20px solid",
          }}
        >
          <h1 className="display-3 fw-bolder " style={{ fontSize: "70px" }}>
            Find The Perfect Job That You Deserved
          </h1>
          <p className="fs-5 mt-4">
            Lorem ipsum is a placeholder text commonly used to demonstrate the
            visual form of a document or a typeface without relying on
            meaningful content
          </p>
          <div className="d-flex mt-4">
            <button className=" btn btn-success rounded-0 px-5 pt-3 pb-3 fs-6">
              Search A Job
            </button>
            <button className="btn btn-primary ms-4 rounded-0 px-5 pt-3 pb-3 fs-6">
              Find A Talent
            </button>
          </div>
        </div>
      </div> */}
      {/* /////////////////////////////////////////////////////////////////// */}
      <div className="row bg-success">
        <div className="container-fluid">
          <div className="container">
            <div className="row justify-content-center  pt-4 pb-4">
              <div className="col-lg-3">
                <input className=" form-control" placeholder="keywords"></input>
              </div>
              <div className="col-lg-3">
                <select className=" form-control">
                  <option>Category</option>
                  <option>Location</option>
                </select>
              </div>
              <div className="col-lg-3">
                <select className="col-lg-3 form-control">
                  <option>Location</option>
                  <option>Location</option>
                </select>
              </div>
              {/* <div className="col-lg-3"> */}
              <button className="col-lg-2 btn btn-dark">Search</button>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default Home;
