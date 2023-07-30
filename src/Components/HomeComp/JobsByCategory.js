import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import job3 from "../Images/job3.jpeg";
// import { CDBAnimation, CDBContainer } from "cdbreact";
import Fade from "react-bootstrap/Fade";
import AOS from "aos";
function JobsByCategory() {
  const [isHovered, setIsHovered] = useState(false);
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="container-fluid bg-white" style={{ marginTop: 85 }}>
      {id === "categ" && (
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
            {/* <CDBContainer>
              <CDBAnimation className="dd" type="jello" count="{3}">
                <h1
                  className="dd display-3 fw-bolder "
                  style={{ fontSize: "70px" }}
                >
                  Category
                </h1>
              </CDBAnimation>
            </CDBContainer> */}
            <h1
              data-aos="fade-down"
              data-aos-delay="150"
              data-aos-offset="200"
              className="display-3 fw-bolder "
              style={{ fontSize: "70px" }}
            >
              Category
            </h1>
            {/* <button
              onClick={(e) => {
                setOpen(!open);
              }}
              aria-expanded={open}
              aria-controls="iddd"
            >
              open ani
            </button>  */}
            {/* <Fade in={open}>
              {/* <i id="iddd" class="fa fa-arrow-right fa-3x"></i> */}
            {/* <div id="iddd">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              </div> */}
            {/* </Fade> */}

            <div className="d-flex">
              <Link className="nav-link">Home </Link> /
              <Link className="nav-link">About</Link> /
              <Link className="nav-link">Pages</Link>
            </div>
          </div>
        </div>
      )}
      <h1
        data-aos="fade-up"
        data-aos-delay="250"
        data-aos-offset="100"
        className="text-center fw-bolder"
      >
        Explore By Category
      </h1>
      <br></br>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 mb-4" style={{}}>
            <div
              data-aos="fade-up"
              data-aos-delay="150"
              data-aos-offset="200"
              className={`border p-4 shadow ${
                isHovered ? "shadow-0 border" : ""
              }`}
              style={{
                cursor: "pointer",
                // boxShadow: "5px 5px 5px #f2f2f2, -5px -5px 5px #f2f2f2",
              }}
              onMouseOver={() => {
                setIsHovered(true);
                // e.target.style.boxShadow = "0px 0px white, 0px 0px white";
              }}
              onMouseOut={() => {
                setIsHovered(false);
                // e.target.style.boxShadow =
                //   "10px 10px 10px #f2f2f2, -10px -10px 10px #f2f2f2";
              }}
            >
              <i className="text-success fa fa-list shadow-0  fs-1 fw-bold pb-3"></i>
              <h6 className="pb-2 shadow-0">Marketing</h6>
              <p className="text-success  shadow-0">123 Vacancy</p>
            </div>
          </div>

          <div
            className="col-lg-3"
            data-aos="fade-up"
            data-aos-delay="250"
            data-aos-offset="200"
          >
            <div className="shadow border p-4" style={{ cursor: "pointer" }}>
              <i className="text-success fa fa-arrow-right fs-1 fw-bold pb-3"></i>
              <h6 className="pb-2">Marketing</h6>
              <p className="text-success">123 Vacancy</p>
            </div>
          </div>
          <div
            className="col-lg-3"
            data-aos="fade-up"
            data-aos-delay="350"
            data-aos-offset="200"
          >
            <div className="shadow border p-4" style={{ cursor: "pointer" }}>
              <i className="text-success fa fa-arrow-up fs-1 fw-bold pb-3"></i>
              <h6 className="pb-2 ">Teaching and Education</h6>
              <p className="text-success">123 Vacancy</p>
            </div>
          </div>
          <div
            className="col-lg-3"
            data-aos="fade-up"
            data-aos-delay="450"
            data-aos-offset="200"
          >
            <div
              className="shadow shadow-dark border p-4"
              style={{ cursor: "pointer" }}
            >
              <i className="text-success  fa fa-arrow-right fs-1 fw-bold pb-3"></i>
              <h6 className="pb-2">Marketing</h6>
              <p className="text-success">123 Vacancy</p>
            </div>
          </div>
          <div
            className="col-lg-3"
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-offset="100"
          >
            <div
              className="shadow shadow-dark border p-4"
              style={{ cursor: "pointer" }}
            >
              <i className="text-success  fa fa-arrow-right fs-1 fw-bold pb-3"></i>
              <h6 className="pb-2">Marketing</h6>
              <p className="text-success">123 Vacancy</p>
            </div>
          </div>
          <div
            className="col-lg-3"
            data-aos="fade-up"
            data-aos-delay="250"
            data-aos-offset="100"
          >
            <div
              className="shadow shadow-dark border p-4"
              style={{ cursor: "pointer" }}
            >
              <i className="text-success  fa fa-arrow-right fs-1 fw-bold pb-3"></i>
              <h6 className="pb-2">Marketing</h6>
              <p className="text-success">123 Vacancy</p>
            </div>
          </div>
          <div
            className="col-lg-3"
            data-aos="fade-up"
            data-aos-delay="350"
            data-aos-offset="100"
          >
            <div
              className="shadow shadow-dark border p-4"
              style={{ cursor: "pointer" }}
            >
              <i className="text-success  fa fa-taxi fs-1 fw-bold pb-3"></i>
              <h6 className="pb-2">Marketing</h6>
              <p className="text-success">123 Vacancy</p>
            </div>
          </div>
          <div
            className="col-lg-3"
            data-aos="fade-up"
            data-aos-delay="450"
            data-aos-offset="100"
          >
            <div
              className="shadow shadow-dark border p-4"
              style={{ cursor: "pointer" }}
            >
              <i className="text-success  fa fa-user fs-1 fw-bold pb-3"></i>
              <h6 className="pb-2">Marketing</h6>
              <p className="text-success">123 Vacancy</p>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
    </div>
  );
}

export default JobsByCategory;
