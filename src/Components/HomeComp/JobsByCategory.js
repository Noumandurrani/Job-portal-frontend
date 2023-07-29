import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import job3 from "../Images/job3.jpeg";

function JobsByCategory() {
  const [isHovered, setIsHovered] = useState(false);
  const { id } = useParams();
  return (
    <div className="container-xxl bg-white" style={{ marginTop: 85 }}>
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
            <h1 className="display-3 fw-bolder " style={{ fontSize: "70px" }}>
              Category
            </h1>
            <div className="d-flex">
              <Link className="nav-link">Home </Link> /
              <Link className="nav-link">About</Link> /
              <Link className="nav-link">Pages</Link>
            </div>
          </div>
        </div>
      )}
      <h1 className="text-center fw-bolder">Explore By Category</h1>
      <br></br>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 mb-4" style={{}}>
            <div
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
              <h6 className="pb-2  shadow-0">Marketing</h6>
              <p className="text-success  shadow-0">123 Vacancy</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="shadow border p-4" style={{ cursor: "pointer" }}>
              <i className="text-success fa fa-arrow-right fs-1 fw-bold pb-3"></i>
              <h6 className="pb-2">Marketing</h6>
              <p className="text-success">123 Vacancy</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="shadow border p-4" style={{ cursor: "pointer" }}>
              <i className="text-success fa fa-arrow-up fs-1 fw-bold pb-3"></i>
              <h6 className="pb-2 ">Teaching and Education</h6>
              <p className="text-success">123 Vacancy</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div
              className="shadow shadow-dark border p-4"
              style={{ cursor: "pointer" }}
            >
              <i className="text-success  fa fa-arrow-right fs-1 fw-bold pb-3"></i>
              <h6 className="pb-2">Marketing</h6>
              <p className="text-success">123 Vacancy</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div
              className="shadow shadow-dark border p-4"
              style={{ cursor: "pointer" }}
            >
              <i className="text-success  fa fa-arrow-right fs-1 fw-bold pb-3"></i>
              <h6 className="pb-2">Marketing</h6>
              <p className="text-success">123 Vacancy</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div
              className="shadow shadow-dark border p-4"
              style={{ cursor: "pointer" }}
            >
              <i className="text-success  fa fa-arrow-right fs-1 fw-bold pb-3"></i>
              <h6 className="pb-2">Marketing</h6>
              <p className="text-success">123 Vacancy</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div
              className="shadow shadow-dark border p-4"
              style={{ cursor: "pointer" }}
            >
              <i className="text-success  fa fa-taxi fs-1 fw-bold pb-3"></i>
              <h6 className="pb-2">Marketing</h6>
              <p className="text-success">123 Vacancy</p>
            </div>
          </div>
          <div className="col-lg-3">
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
