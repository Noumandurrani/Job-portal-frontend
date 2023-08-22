import React from "react";
import { Link } from "react-router-dom";
import job3 from "../../Images/job3.jpeg";

function SrchJobByCateg() {
  return (
    <div className="container-fluid bg-white" style={{ marginTop: 84 }}>
      <div
        className="row text-light"
        style={{
          marginTop: 85,
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
          <h1
            data-aos="fade-down"
            data-aos-delay="250"
            data-aos-offset="200"
            data-aos-duration="700"
            className="display-3 fw-bolder "
            style={{ fontSize: "70px" }}
          >
            Search For job Categorically
          </h1>
          <div className="d-flex">
            <Link className="nav-link">Home </Link> /
            <Link className="nav-link">About</Link> /
            <Link className="nav-link">Pages</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SrchJobByCateg;
