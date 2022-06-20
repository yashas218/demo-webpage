import React from "react";

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">About</h1>
            <p>
              The aim of this hospital is to ensure everyone lives a healthy life without any diseases and live peacefully.
              Spealist in every aspect present in medical, ranging from heart, kidney, eyes, bone and many more....
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;