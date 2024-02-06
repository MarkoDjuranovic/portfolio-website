// Project1Page.jsx

import React from "react";
import "./body.scss";
import "./project3.scss";

const Project1Page = () => {
  return (
    <div className="wrapper">
    
        <section id="project-overview">
          <div className="">
            <div className="column">
              <h1>DoseCheck Lite</h1>

              <h3>Summer Internship Application</h3>

              <h3>
                DoseCheck is a digital therapeutic app to help patients living
                with type 2 diabetes find the right dose of insulin to manage
                their blood sugar levels
              </h3>
            </div>
            <div id="center">
              <img
                className="images"
                src="/dose-check2.png"
                alt="Dose Check App"
              />
            </div>
          </div>
        </section>

        <div className="case-study">
        <div className="info u-border-charcoal">
          <div className="third margin-bottom-20px">
            <div className="team-text margin-bottom bold">ROLE</div>
            <div className="team-text ">UX/UI Designer</div>
          </div>
          <div className="third margin-bottom-20px">
            <div className="team-text  margin-bottom bold">TEAM</div>
            <div className="team-text ">Amalgam Design Team</div>
          </div>
          <div className="third margin-bottom-20px">
            <div className="team-text  margin-bottom bold">DURATION</div>
            <div className="team-text ">
              Jun-Aug 2023 <br />
              (3 mo. total)
            </div>
          </div>
        </div>
      </div>
        <div id="overview">
        <div className="">
          <h1>Overview</h1>
        </div>
        <h3>Build a sign up flow for DoseCheck Lite (IOS and Android)</h3>
            <h3>Fixed existing UX issues</h3>
            <p>
              When I joined the design team in the summer of 23 the product only
              supported registration via a participating healthcare provider.
              The product team wanted to create a version of the product where
              patients could register on their own, with functionality in the
              app that did not require regulatory approval
            </p>
        <div className="center-div">
          <div className="">
            <img
              className="images"
              src="/image1.svg"
              alt="Homescreen Dosecheck App"
            />
          </div>
        </div>
      </div>

        <div id="problem">
          <h1>Starting Problem</h1>
          <p>
            <i>
              Current application did not support patients to register without
              regulatory approval, thus limiting the number of people that could
              find this app useful
            </i>
          </p>
          <p>
            {" "}
            There was not a way for patients to select the insulin they are
            currently taking
          </p>

          <p>
            {/* Why it matters: Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Libero, temporibus. Minus, voluptatum at? Iure, consectetur
            natus! Nobis quod doloribus, non eius aut mollitia animi optio
            blanditiis atque dolorum inventore ratione! */}
          </p>
        </div>

        <div className="user-research">

          <h1>More to Come! I update my portfolio daily! Check later for more content </h1>
        </div>
      
    </div>
  );
};

export default Project1Page;
