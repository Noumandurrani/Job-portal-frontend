import React, { useState } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import job1 from "../Images/job1.jpeg";
import { Link, useParams } from "react-router-dom";
import job3 from "../Images/job3.jpeg";

function CarouselClients() {
  const [backgroundColor, setBackgroundColor] = useState("#effdf5");
  const [textColor, setTextColor] = useState("gray");
  const { id } = useParams();
  return (
    <div style={{ marginTop: 85 }}>
      {id === "test" && (
        <div
          className="row text-light"
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(${job3})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "500px",
            position: "relative",
            marginBottom: "100px",
          }}
        >
          <div
            className="col-lg-8 position-absolute d-flex flex-column justify-content-center"
            style={{
              top: "30%",
              left: "12%",
              borderLeft: "20px solid #139c49",
              paddingLeft: "40px",
              paddingTop: "40px",
              paddingBottom: "40px",
              // borderTop: "20px solid",
            }}
          >
            <h1 className="display-3 fw-bolder " style={{ fontSize: "70px" }}>
              Testimonial
            </h1>
            <div className="d-flex">
              <Link className="nav-link">Home </Link> /
              <Link className="nav-link">About</Link> /
              <Link className="nav-link">Pages</Link>
            </div>
          </div>
        </div>
      )}
      <h1 className="text-center fw-bolder">Our Clients Say!!!</h1>

      {/* <div className="container-xxl"> */}
      <div className="container ">
        {/* <div className="row"> */}
        <Carousel
          slide
          variant="dark"
          interval={700}
          nextIcon={
            <i className="fa fa-arrow-right bg-primary p-2 rounded d-none"></i>
          }
          prevIcon={
            <i className="fa fa-arrow-left bg-primary p-2 rounded d-none"></i>
          }
        >
          <CarouselItem className="carousel-item">
            <div className="row justify-content-center pt-3 pb-3 px-3">
              <div className="col-lg-4">
                <div
                  className="shadow p-4"
                  style={{
                    backgroundColor: backgroundColor,
                    color: textColor,
                  }}
                  onMouseOver={(e) => {
                    setBackgroundColor("#00b074");
                    setTextColor("white");
                    // e.target.style.color = "white";
                    // e.target.style.backgroundColor = "green";
                  }}
                  onMouseOut={(e) => {
                    setBackgroundColor("#effdf5");
                    setTextColor("gray");

                    // e.target.style.color = "gray";

                    // e.target.style.backgroundColor = "#effdf5";
                  }}
                >
                  <i
                    className="bi bi-chat-right-quote-fill fs-2 "
                    // style={{ color: "#00b074" }}
                  ></i>
                  <p className="mt-3">
                    fdfdfddadd sfdad fadsfda aaadad fdada fada fdf fs sdf fdf
                    gsd
                  </p>
                  <div className="d-flex flex-row align-items-center ">
                    <img
                      src={job1}
                      style={{ height: 60, width: 60 }}
                      alt="image"
                    ></img>
                    <div className="d-flex flex-column mx-3 pt-3">
                      <h5>Client name</h5>
                      <p>Profession</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="shadow p-4"
                  style={{
                    backgroundColor: "#effdf5",
                    // color: textColor,
                  }}
                  // style={{ backgroundColor: backgroundColor }}
                  // onMouseOver={(e) => {
                  //   setBackgroundColor("#00b074");
                  // }}
                  // onMouseOut={(e) => {
                  //   setBackgroundColor("#effdf5");
                  // }}
                >
                  <i className="bi bi-chat-right-quote-fill text-success fs-2 "></i>
                  <p className="mt-3">
                    fdfdfddadd sfdad fadsfda aaadad fdada fada fdf fs sdf fdf
                    gsd
                  </p>
                  <div className="d-flex flex-row align-items-center ">
                    <img
                      src={job1}
                      style={{ height: 60, width: 60 }}
                      alt="image"
                    ></img>
                    <div className="d-flex flex-column mx-3 pt-3">
                      <h5>Client name</h5>
                      <p>Profession</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="shadow p-4"
                  style={{
                    backgroundColor: "#effdf5",
                    // color: textColor,
                  }}
                >
                  <i className="bi bi-chat-right-quote-fill text-success fs-2 "></i>
                  <p className="mt-3">
                    fdfdfddadd sfdad fadsfda aaadad fdada fada fdf fs sdf fdf
                    gsd
                  </p>
                  <div className="d-flex flex-row align-items-center ">
                    <img
                      src={job1}
                      style={{ height: 60, width: 60 }}
                      alt="image"
                    ></img>
                    <div className="d-flex flex-column mx-3 pt-3">
                      <h5>Client name</h5>
                      <p>Profession</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="carousel-item">
            <div className="row justify-content-center pt-3 pb-3 px-3">
              <div className="col-lg-4">
                <div
                  className="shadow p-4"
                  style={{
                    backgroundColor: backgroundColor,
                    color: textColor,
                  }}
                  onMouseOver={(e) => {
                    setBackgroundColor("#00b074");
                    setTextColor("white");
                    // e.target.style.color = "white";
                    // e.target.style.backgroundColor = "green";
                  }}
                  onMouseOut={(e) => {
                    setBackgroundColor("#effdf5");
                    setTextColor("gray");

                    // e.target.style.color = "gray";

                    // e.target.style.backgroundColor = "#effdf5";
                  }}
                >
                  <i
                    className="bi bi-chat-right-quote-fill fs-2 "
                    // style={{ color: "#00b074" }}
                  ></i>
                  <p className="mt-3">
                    fdfdfddadd sfdad fadsfda aaadad fdada fada fdf fs sdf fdf
                    gsd
                  </p>
                  <div className="d-flex flex-row align-items-center ">
                    <img
                      src={job1}
                      style={{ height: 60, width: 60 }}
                      alt="image"
                    ></img>
                    <div className="d-flex flex-column mx-3 pt-3">
                      <h5>Client name</h5>
                      <p>Profession</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="shadow p-4"
                  style={{
                    backgroundColor: "#effdf5",
                    // color: textColor,
                  }}
                  // style={{ backgroundColor: backgroundColor }}
                  // onMouseOver={(e) => {
                  //   setBackgroundColor("#00b074");
                  // }}
                  // onMouseOut={(e) => {
                  //   setBackgroundColor("#effdf5");
                  // }}
                >
                  <i className="bi bi-chat-right-quote-fill text-success fs-2 "></i>
                  <p className="mt-3">
                    fdfdfddadd sfdad fadsfda aaadad fdada fada fdf fs sdf fdf
                    gsd
                  </p>
                  <div className="d-flex flex-row align-items-center ">
                    <img
                      src={job1}
                      style={{ height: 60, width: 60 }}
                      alt="image"
                    ></img>
                    <div className="d-flex flex-column mx-3 pt-3">
                      <h5>Client name</h5>
                      <p>Profession</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="shadow p-4"
                  style={{
                    backgroundColor: "#effdf5",
                    // color: textColor,
                  }}
                >
                  <i className="bi bi-chat-right-quote-fill text-success fs-2 "></i>
                  <p className="mt-3">
                    fdfdfddadd sfdad fadsfda aaadad fdada fada fdf fs sdf fdf
                    gsd
                  </p>
                  <div className="d-flex flex-row align-items-center ">
                    <img
                      src={job1}
                      style={{ height: 60, width: 60 }}
                      alt="image"
                    ></img>
                    <div className="d-flex flex-column mx-3 pt-3">
                      <h5>Client name</h5>
                      <p>Profession</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        </Carousel>
        {/* </div> */}
      </div>
      {/* </div> */}
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default CarouselClients;

////////////////////

{
  /* <Carousel.Item>
                <div className="col-lg-4">
                  <div className="shadow p-4">
                    <i className="bi bi-chat-right-quote-fill text-success fs-2 "></i>
                    <p className="mt-3">
                      fdfdfddadd sfdad fadsfda aaadad fdada fada
                    </p>
                    <div className="d-flex flex-row align-items-center ">
                      <img
                        src={job1}
                        style={{ height: 60, width: 60 }}
                        alt="image"
                      ></img>
                      <div className="d-flex flex-column mx-3 pt-3">
                        <h5>Client name</h5>
                        <p>Profession</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item> */
}
