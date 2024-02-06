// Project2Page.jsx

import React from "react";
import  "./project2.scss";

const Project2Page = () => {
  return (
    <div className="wrapper">
      <section id="project-overview">
        <div className="">
          <div className="column">
            <h1>Journey-To-Go</h1>

            <h3>
              Empowering the design team's UX/UI capabilities through a
              successful execution of a design thinking workshop for enhancing
              internal project designs.
            </h3>

            <h3>Design Thinking Project</h3>
          </div>
          <div className="center">

          </div>
        </div>
      </section>

      <div className="case-study">
        <div className="info u-border-charcoal">
          <div className="third margin-bottom-20px">
            <div className="team-text margin-bottom bold">ROLE</div>
            <div className="team-text ">UX Designer</div>
          </div>
          <div className="third margin-bottom-20px">
            <div className="team-text  margin-bottom bold">TEAM</div>
            <div className="team-text ">Amalgam Design Team</div>
          </div>
          <div className="third margin-bottom-20px">
            <div className="team-text  margin-bottom bold">DURATION</div>
            <div className="team-text ">
              Jun-Aug 2022 <br />
              (3 mo. total)
            </div>
          </div>
        </div>
      </div>
      <div id="overview">
        <div className="">
          <h1>Overview</h1>
        </div>

      </div>

      <div id="problem">
        <h2>
          {" "}
          We don’t have a good way to quickly generate UX deliverables that are
          presentable to an executives and/or client audience
        </h2>
        <p>
          <i></i>
        </p>

        <p></p>
      </div>

      <div id="solution">
        <h1>Exploring the problem</h1>

        <p>
          When I joined the design team they did not have a reliable method for
          making easy-to-digest deliverables that are customizable and time
          efficient.
        </p>

        <p>
          Before diving into the design process, my initial step was to
          cultivate a profound understanding of the problem by leveraging the
          Design Thinking Methodology and the Double Diamond approach.
          <img
            className="images2"
            src="/double-diamond.png"
            alt="Double Diamond Picture"
          />
        </p>
      </div>

      <div id="user-research">
        <h1>Discover</h1>

        <p>
          Conducting interviews with the team's designers to systematically
          explore questions and challenge assumptions, thereby expanding my
          comprehension of the problem.
        </p>

        <img
          className="images2"
          src="/dt-project1.png"
          alt="Interview Questions"
        />

        <h1>Existing Market Analysis and Representation Discovery</h1>
        <img
          className="images2"
          src="/existing-market.png"
          alt="Existing Market Analysis"
        />

        <h3>My main objective was to </h3>
        <ol>
          <li>Understand how is this for </li>
          <li>What are they trying to do </li>
          <li>What is motivating them</li>
          <li>What is getting in their way</li>
        </ol>

        <h1>Define</h1>

        <p>
          After gathering information through interviewing I put together an
          affinity map for a better organization and look on the process so far
        </p>

   
        <img
          className="images2"
          src="/affinity-journey.png"
          alt="Affinity Diagram"
        />
        <p>
          <br />

          <br />
        </p>
      </div>

      <div id="ideation">
        <h3>Persona</h3>

        <p>
          To gain an even better understading of the user experience, and for
          who are we designing for, my team and I developed a persona and
          emhpasized their goals/motivations and pain points.
        </p>

        <img
          className="images2"
          src="/persona-jtg.png"
          alt="Persona Profile Picture"
        />

        <h3>Defining HMW Statement</h3>

        <p>
          Centered around the user, reframing challenges into opportunities,
          brainstorming
        </p>
        <img className="images2" src="/hmw.png" alt="HMW statements" />
      </div>

      <div id="prototyping">
        <h1>Develop</h1>
        <h3>Rapid Ideation (Breadth)</h3>
        <p>
          A critical step in the design thinking process as it allows <br />
          Divergent thinking, thinking outsite the box, and broad exploration of
          potential solution <b>without </b>evaluation
        </p>
        <img
          className="images2"
          src="/rapid-ideation.png"
          alt="Rapid Ideation"
        />
        <h3>Fast 4s (Depth)</h3>
        <p>Diverse Perspectives, Adaptive Problem Framing</p>
        <img className="images2" src="/fast4s.png" alt="Rapid Ideation" />
        <br />
        <h3>Effort / Impact Analysis</h3>
        <p>Prioritization of Ideas, Alignment with goals and user needs</p>
        <img
          className="images2"
          src="/impact-analysis.png"
          alt="Impact Analysis
        "
        />
        <h3>Potential Solutions/ Concepts</h3>
        <img
          className="images2"
          src="/concept1.png"
          alt="Solution 1
        "
        />
        <img
          className="images2"
          src="/concept2.png"
          alt="Solution 2
        "
        />
        <br />
        <h1>Develop</h1>
        <br />
        <h3>Assessment/ Iteration</h3>
        <p>
          Testing and evluating the template/process by mocking up a journey map
          for one of the existing projects
        </p>
        <h1>Outcome</h1>
        <p>
          Maintained ongoing communication with the UX Lead, who successfully
          applied our approach in testing a new client project. The results were
          positively received and utilized to present the program to additional
          senior stakeholders within the client company.
        </p>
        <br />
        <p>
          Implemented the journey mapping method on a larger internal project,
          focusing on enhancing ways of working within the organization. The
          methodology proved effective in providing valuable insights and was
          applied to streamline and improve internal processes.
        </p>
        <br />
        <p>
          The CEO opted to feature it as an exemplary illustration of our
          process during presentations to investors.
        </p>
      </div>
    </div>
  );
};

export default Project2Page;
