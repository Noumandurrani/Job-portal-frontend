import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div
      className="container-fluid pt-5"
      style={{ backgroundColor: "#2b3940" }}
    >
      <div className="container text-white pt-5 pb-5">
        {/* <h2>Footer</h2> */}
        <div className="row">
          <div className="col-lg-3">
            <h4 className="pb-3 fw-bolder">Company</h4>
            <div
              className="d-flex flow-row fw-bolder"
              style={{ color: "#959ca0" }}
            >
              <i class="bi bi-caret-right me-2"></i>
              <p>About Us</p>
            </div>
            <div
              className="d-flex flow-row  fw-bolder"
              style={{ color: "#959ca0" }}
            >
              <i class="bi bi-caret-right  me-2"></i>
              <p>Contact Us</p>
            </div>
            <div
              className="d-flex flow-row  fw-bolder"
              style={{ color: "#959ca0" }}
            >
              <i class="bi bi-caret-right  me-2"></i>
              <p>Our Services</p>
            </div>
            <div
              className="d-flex flow-row  fw-bolder"
              style={{ color: "#959ca0" }}
            >
              <i class="bi bi-caret-right  me-2"></i>
              <p>Privacy Policy</p>
            </div>
            <div
              className="d-flex flow-row  fw-bolder"
              style={{ color: "#959ca0" }}
            >
              <i class="bi bi-caret-right me-2"></i>
              <p>Terms & Condition</p>
            </div>
          </div>
          {/* //////////////////// */}
          <div className="col-lg-3">
            <h4 className="pb-3 fw-bolder">Quick Links</h4>
            <div
              className="d-flex flow-row fw-bolder"
              style={{ color: "#959ca0" }}
            >
              <i class="bi bi-caret-right me-2"></i>
              <p>About Us</p>
            </div>
            <div
              className="d-flex flow-row  fw-bolder"
              style={{ color: "#959ca0" }}
            >
              <i class="bi bi-caret-right  me-2"></i>
              <p>Contact Us</p>
            </div>
            <div
              className="d-flex flow-row  fw-bolder"
              style={{ color: "#959ca0" }}
            >
              <i class="bi bi-caret-right  me-2"></i>
              <p>Our Services</p>
            </div>
            <div
              className="d-flex flow-row  fw-bolder"
              style={{ color: "#959ca0" }}
            >
              <i class="bi bi-caret-right  me-2"></i>
              <p>Privacy Policy</p>
            </div>
            <div
              className="d-flex flow-row  fw-bolder"
              style={{ color: "#959ca0" }}
            >
              <i class="bi bi-caret-right me-2"></i>
              <p>Terms & Condition</p>
            </div>
          </div>
          {/* /////////////////////////// */}
          <div className="col-lg-3">
            <h4 className="pb-3 fw-bolder">Contact</h4>
            <div
              className="d-flex flow-row fw-bolder"
              style={{ color: "#959ca0" }}
            >
              <i class="bi bi-geo-alt-fill me-2"></i>
              <p>123 Street, New York, USA</p>
            </div>
            <div
              className="d-flex flow-row  fw-bolder"
              style={{ color: "#959ca0" }}
            >
              <i class="bi bi-telephone  me-2"></i>
              <p>+012 333 69695</p>
            </div>
            <div
              className="d-flex flow-row  fw-bolder"
              style={{ color: "#959ca0" }}
            >
              <i class="bi bi-envelope-fill  me-2"></i>
              <p>info@gmail.com</p>
            </div>
            <div
              className="d-flex flow-row  fw-bolder"
              style={{ color: "#959ca0" }}
            >
              <i class="bi bi-twitter fs-5 px-2 border rounded me-2"></i>
              <i class="bi bi-facebook fs-5 px-2  rounded border me-2"></i>
              <i class="bi bi-youtube fs-5 px-2 rounded border me-2"></i>
              <i class="bi bi-linkedin fs-5 px-2  rounded border me-2"></i>
            </div>
          </div>
          {/* //////////////////////////// */}
          <div className="col-lg-3">
            <h4 className="pb-3 fw-bolder">Newsletter</h4>
            <div
              className="d-flex flow-row fw-bolder"
              style={{ color: "#959ca0" }}
            >
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            </div>
            <div
              className="d-flex flow-row  fw-bolder border py-2 px-2 shadow-0"
              style={{ color: "#959ca0" }}
            >
              <input
                className="bg-transparent "
                type="email"
                placeholder="email"
                style={{
                  width: "65%",
                  backgroundColor: "",
                }}
              ></input>
              <button className="btn btn-success rounded-0">SignUp</button>
            </div>
          </div>
          {/* //////////////////////////////// */}
        </div>
        <hr></hr>
      </div>
    </div>
  );
}

export default Footer;
