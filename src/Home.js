import React, { useRef, useEffect } from "react";
import job2 from "./Components/Images/job2.jpeg";
import job3 from "./Components/Images/job3.jpeg";
import { Carousel } from "react-bootstrap";
import JobsByCategory from "./Components/HomeComp/JobsByCategory";
import JobsListing from "./Components/HomeComp/JobsListing";
import CarouselClients from "./Components/HomeComp/CarouselClients";
import AOS from "aos";
function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="container-fluid bg-white " ////sticky-top bg-white
      style={{ marginTop: 84 }}
    >
      {/* ///////////////////////////Carousel///////////////////////////////////// */}
      <Carousel
        className="carousel"
        style={{ marginLeft: "-12px", marginRight: "-12px" }}
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
        <Carousel.Item className="slide" interval={3500}>
          <div
            className="row text-light "
            style={{
              // backgroundImage: `url(${job2})`,
              // backgroundBlendMode: "",
              // filter: "brightness(50%)",
              background: `linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url(${job2})`,
              backgroundSize: "100% 100%",
              height: "600px",
              position: "relative",
            }}
          >
            <div
              className="col-lg-8 position-absolute d-flex flex-column justify-content-center"
              style={{
                top: "12%",
                left: "10%",
                borderLeft: "20px solid #139c49",
                paddingLeft: "40px",
                paddingTop: "40px",
                paddingBottom: "40px",
                // borderTop: "20px solid",
              }}
            >
              <h1
                data-aos="fade-down"
                data-aos-delay="250"
                data-aos-offset="200"
                data-aos-duration="1000"
                className="display-3 fw-bolder "
                style={{ fontSize: "70px" }}
              >
                Find The Perfect Job That You Deserved
              </h1>
              <p
                data-aos="fade-down"
                data-aos-delay="250"
                data-aos-offset="200"
                data-aos-duration="1000"
                className="fs-5 mt-4"
              >
                Lorem ipsum is a placeholder text commonly used to demonstrate
                the visual form of a document or a typeface without relying on
                meaningful content
              </p>
              <div className="d-flex mt-4">
                <button
                  data-aos="fade-right"
                  data-aos-delay="250"
                  data-aos-offset="100"
                  data-aos-duration="700"
                  className=" btn btn-success rounded-0 px-5 pt-3 pb-3 fs-6"
                >
                  Search A Job
                </button>
                <button
                  data-aos="fade-left"
                  data-aos-delay="250"
                  data-aos-offset="100"
                  data-aos-duration="1000"
                  className="btn btn-primary ms-4 rounded-0 px-5 pt-3 pb-3 fs-6"
                >
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
              // backgroundImage: `url(${job3})`,
              background: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(${job3})`,
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              // backgroundRepeat: "no-repeat",
              // backgroundSize: "cover",
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
                // borderTop: "20px solid",
              }}
            >
              <h1
                data-aos="fade-down"
                data-aos-delay="250"
                data-aos-offset="200"
                className="display-3 fw-bolder "
                style={{ fontSize: "70px" }}
              >
                Find The Best Startup Job That Fit You
              </h1>
              <p
                data-aos="fade-down"
                data-aos-delay="250"
                data-aos-offset="200"
                className="fs-5 mt-4"
              >
                Lorem ipsum is a placeholder text commonly used to demonstrate
                the visual form of a document or a typeface without relying on
                meaningful content
              </p>
              <div
                data-aos="fade-down"
                data-aos-delay="250"
                data-aos-offset="100"
                className="d-flex mt-4"
              >
                <button className=" btn btn-success rounded-0 px-5 pt-3 pb-3 fs-6">
                  Search A Job
                </button>
                <button
                  data-aos="fade-down"
                  data-aos-delay="250"
                  data-aos-offset="100"
                  className="btn btn-primary ms-4 rounded-0 px-5 pt-3 pb-3 fs-6"
                >
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
      <div
        data-aos="fade"
        data-aos-delay="150"
        data-aos-offset="30"
        className="row bg-success"
      >
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
      <JobsByCategory></JobsByCategory>

      <JobsListing></JobsListing>
      <br></br>

      <CarouselClients></CarouselClients>
      <br></br>
    </div>
  );
}

export default Home;
