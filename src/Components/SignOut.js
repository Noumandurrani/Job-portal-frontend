import React, { useEffect, useState } from "react";
import axios from "axios";
import { Modal, Nav } from "react-bootstrap";
import { NavLink, Link, useNavigate, Form } from "react-router-dom";
import tick from "./Images/tick.png";
function SignOut({ showSignOut, setShowSignOut, showUserData }) {
  const navgate = useNavigate();
  const [showPage, setShowPage] = useState(false);
  // const [showUserData, setShowUserData] = useState();
  // const [userid, setUserid] = useState(localStorage.getItem("userId"));
  // console.log(localStorage.getItem("userId"));
  // useEffect(() => {
  //   axios
  //     .get(
  //       `http://127.0.0.1:5000/jobportal/api/get/user/${localStorage.getItem(
  //         "userId"
  //       )}`
  //     )
  //     .then((res) => {
  //       console.log(res.data);
  //       // setShowUserData(res.data.data.name);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, []);
  const handleClose = (e) => {
    setShowSignOut(false);
  };
  return (
    <div>
      <Modal
        style={{
          zIndex: 1000000000,
          marginTop: "100px",
        }}
        className="modal"
        show={showPage}
        onHide={() => {
          setShowPage(false);
        }}
      >
        <Modal.Header>
          <Modal.Title>Logged Out sucessfully</Modal.Title>
        </Modal.Header>
        <img src={tick} style={{ height: "260px", overflow: "none" }}></img>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-success"
            onClick={() => {
              setShowPage(false);
            }}
          >
            OK
          </button>
        </Modal.Footer>
      </Modal>
      {/* /////////////////////////////// */}
      <Modal
        style={{
          zIndex: 100000000,
        }}
        show={showSignOut}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Hey {showUserData.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>you want to be log out.</p>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-danger"
            onClick={(e) => {
              e.preventDefault();
              localStorage.clear();
              setShowSignOut(false);
              setShowPage(true);
              navgate("/");
            }}
          >
            Log Out
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SignOut;
