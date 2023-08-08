import job3 from "./Images/job3.jpeg";
import { Link } from "react-router-dom";
import AOS from "aos";
import React, { useState, useEffect } from "react";

function About() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="container-xxl bg-white" style={{ marginTop: 85 }}>
      <div
        className="row text-light"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(${job3})`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "500px",
          position: "relative",
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
            About
          </h1>
          <div className="d-flex">
            <Link className="nav-link">Home </Link> /
            <Link className="nav-link">About</Link> /
            <Link className="nav-link">Pages</Link>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: "20px" }}>
        <p
          data-aos="fade"
          data-aos-delay="250"
          data-aos-offset="50"
          className=""
        >
          Welcome to our blog, where we explore the limitless potential of
          positive thinking and its profound impact on our lives. In a world
          filled with challenges and uncertainties, developing a positive
          mindset can be the key to unlocking happiness, success, and personal
          growth.In this article, we will delve into the power of positive
          thinking and provide practical tips to incorporate it into your daily
          life.
        </p>
        <h5 data-aos="fade" data-aos-delay="250" data-aos-offset="50">
          Understanding the Power of Positive Thinking:
        </h5>
        <p data-aos="fade" data-aos-delay="250" data-aos-offset="50">
          Positive thinking is more than just wishful thoughts or a fleeting
          feeling of optimism. It is a mindset that embraces a constructive
          outlook and focuses on the potential for growth and success in any
          situation. Research has shown that positive thinking can enhance
          resilience, improve mental health, boost physical well-being, and
          foster better relationships.
        </p>
        <h5 data-aos="fade" data-aos-delay="250" data-aos-offset="50">
          Shifting Perspectives:
        </h5>
        <p data-aos="fade" data-aos-delay="250" data-aos-offset="50">
          Adopting a positive mindset requires a conscious effort to shift
          perspectives and reframe negative thoughts. Start by cultivating
          self-awareness and paying attention to your inner dialogue. Replace
          self-limiting beliefs with positive affirmations and empowering
          statements. By changing the way you perceive challenges and setbacks,
          you can open yourself up to opportunities for growth and find creative
          solutions.
        </p>
        <h5 data-aos="fade" data-aos-delay="250" data-aos-offset="50">
          Practicing Gratitude:
        </h5>
        <p data-aos="fade" data-aos-delay="250" data-aos-offset="50">
          Gratitude is a powerful tool that can instantly shift your focus from
          what's lacking in your life to the abundance of blessings that
          surround you. Make a habit of practicing gratitude daily. This can be
          as simple as jotting down three things you are grateful for each day
          or expressing appreciation to others. Cultivating an attitude of
          gratitude trains your mind to seek the positive aspects in every
          situation.
        </p>
        <h5 data-aos="fade" data-aos-delay="250" data-aos-offset="50">
          Surrounding Yourself with Positivity:
        </h5>
        <p data-aos="fade" data-aos-delay="250" data-aos-offset="50">
          The people we surround ourselves with significantly impact our
          mindset. Surround yourself with positive, supportive individuals who
          inspire and uplift you. Engage in activities that bring you joy and
          fulfillment. Seek out books, podcasts, or motivational talks that
          promote positivity and personal growth. By immersing yourself in a
          positive environment
        </p>
      </div>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default About;
