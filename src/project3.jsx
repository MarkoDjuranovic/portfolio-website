// Project1Page.jsx

import React from "react";
import "./project3.scss";

const Project3Page = () => {
  return (
    <div className="wrapper">
      <section id="project-overview">
        <div className="">
          <div className="column">
            <h1>PawPrints</h1>

            <h3>
              Final Project for INFO3450: Human-Computer Interaction Design at
              Cornell University
            </h3>

            <h3>
              Explore a groundbreaking project that quells pet owners' anxieties
              during air travel by introducing real-time monitoring, showcasing
              a fierce commitment to ensuring the safety and happiness of their
              furry companions
            </h3>
          </div>
          <div id="center">
            <img
              className="images"
              src="/pawprints2.png"
              alt="Paw Prints App"
            />
            <img
              className="images"
              src="/pawprints1.png"
              alt="Paw Prints App"
            />
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
            <div className="team-text ">4 Students</div>
          </div>
          <div className="third margin-bottom-20px">
            <div className="team-text  margin-bottom bold">DURATION</div>
            <div className="team-text ">
              Aug-Dec 2022 <br />
              (4 mo. total)
            </div>
          </div>
        </div>
      </div>
      <div id="overview">
        <div className="">
          <h1>Overview</h1>
        </div>

        <div className="center-div">
          <div className="">
            <img
              className="images"
              src="/pawprints-poster.png"
              alt="Homescreen Dosecheck App"
            />
          </div>
        </div>
      </div>

      <div id="problem">
        <h1>
          <i>
            Between 2010 and 2020, more than 250 pets lost their lives either
            during or right after air travel.
          </i>
        </h1>
        <p>
          <i>
            In cargo, animals suffer temperature extremes, leaving pet owners
            emotionally torn, struggling to hold transport companies accountable
            amid the elusive reasons behind their pets' distress.
          </i>
        </p>

        <p>
          Pets are family, and ensuring their safety during air travel is
          paramount. Limited alternatives force owners to entrust their beloved
          animals to major companies, causing undue stress and anxiety during
          journeys.
        </p>
      </div>

      <div id="solution">
        <h1>Solution</h1>

        <p>
          As a team, we created the Pawprints app for real-time pet monitoring
          during transit. It includes an in-flight screen app with live video
          feedback from a Bluetooth-enabled monitor in cargo and a companion
          mobile app for comprehensive location tracking from gate to gate.
        </p>

        <p>
          Our goal is to boost transparency in pet treatment, giving owners
          peace of mind and holding transportation companies accountable for
          better conditions during transit.
        </p>
      </div>

      <div id="user-research">
        <h1>User Research</h1>

        <p>
          While operating within a college campus environment, our team enlisted
          interview participants from the student body at Cornell University who
          aligned with our target user group.
        </p>

        <img className="images" src="/user-research.svg" alt="User Research" />
        <h3>Our main objective was to </h3>
        <ol>
          <li>
            Recognize the primary sources of stress and worries experienced by
            pet owners when transporting their animals via air travel, aiming to
            pinpoint potential areas for enhancement.
          </li>
          <br />

          <li>
            Comprehend the preferences and criticisms of users regarding the
            existing pet air transportation system.
          </li>
          <br />
          <li>
            Explore the external tools or resources that users depend on to
            facilitate seamless pet transportation.
          </li>
          <br />
          <li>
            Recognize the emotions and concerns that users experience throughout
            the pet transportation process.
          </li>
        </ol>
        <p>
          We conducted 5 interviews (dogs and cats) lasting 45 minutes each,
          covering travel habits and concerns about flying with pets.
          Participants shared recent experiences and demonstrated items used for
          pet transport.
        </p>

        <img
          className="images"
          src="/affinity-pawprints.png"
          alt="Affinity Diagram"
        />
        <p>
          We condensed interview data into insights using an affinity diagram,
          then crafted design requirements to address user group challenges.
        </p>

        <h4>Our insights and requirements</h4>

        <ol>
          <li>
            Insight 1: <br /> Pets face distressing conditions in cargo, such as
            cramped spaces and loud noises. Owners go to great lengths, using
            insulating blankets and relaxant treats, adding to the stress of
            travel.
          </li>
          <br />
          <li>
            Insight 2: <br /> Pet owners feel helpless and anxious during pet
            air travel due to limited transportation options. They worry about
            their pet's well-being, including crate handling by airline workers
            and crate security in the cargo cabin.
          </li>
          <br />
          <li>
            Insight 3: <br />
            Pet owners desire increased transparency in their pets' treatment
            during air travel. They want the ability to check on pets during
            separation, seeking information on airline policies and staff
            handling.
          </li>
          <br />
          <li>
            Insight 4: <br /> Pet owners prefer monitoring pets during
            separation, whether through trusted individuals or digital devices.
            This eases stress and provides peace of mind, ensuring their pets'
            well-being from a distance.
          </li>
        </ol>

        <h2>Key Requirements</h2>

        <p>
          Requirement 1: <br /> Pet owners need real-time updates on their pet's
          well-being and status during air travel, ensuring they're informed
          about their pet's condition and welfare throughout the journey.
          <br />
          <br />
          Requirement 2: <br /> Pet owners need information about in-flight
          conditions, especially for pets in cargo, to understand the
          environment and circumstances their pets face during air travel.
          <br />
          <br />
          Requirement 3: <br /> Pet owners seek transparency in airline employee
          behaviors and policies governing pet treatment. Clear and open
          communication is necessary about how airline staff handle pets and the
          specific policies ensuring the well-being and safety of pets during
          air travel.
        </p>
      </div>

      <div id="ideation">
        <h1>Existing Solution Analysis</h1>

        <p>
          Existing solutions in the pet transportation domain lack focus on
          addressing the anxiety and potential harm arising from owners' lack of
          awareness throughout the process. Our analysis centers on products
          designed to monitor pets during separation, addressing the gaps in
          understanding pet emotions and well-being post check-in.
          <br />
          <br />
          Most solutions involve applications enabling monitoring through photos
          and videos linked to a home-based device. Other products measure
          environmental or health metrics like air temperature, humidity, or
          body temperature. However, no existing products directly apply these
          features to the context of pet air travel.
        </p>

        <img
          className="images"
          src="/brainstorming.png"
          alt="Brainstorming Picture"
        />

        <h3>The Idea</h3>

        <p>
          After a group vote on the aforementioned options, we opted for the
          following design concept to address our problem space.
          <br />
          <br /> Real-time in-flight app connected to a cargo Bluetooth monitor
          displays pet health and videos. Mobile app offers pre-flight status,
          location info, post-flight features, and a community for ratings and
          reviews.
          <br />
          <br />
          Focused on a human-centered approach, we aim to ease pet owners'
          stress during travel by providing real-time updates. Empowering owners
          with monitoring evidence may encourage airlines to be more cautious,
          positively impacting pet treatment.
        </p>

        <h3>Early Sketch and Information Architecture</h3>

        <img
          className="images"
          src="/early-sketch.png"
          alt="Early Sketch Image"
        />

        <img
          className="images"
          src="/info-arch-paws.png"
          alt="Information Architecture Picture"
        />
      </div>

      <div id="prototyping">
        <h3>Prototyping</h3>

        <p>
          Once we finalized the information architecture linking both apps in
          our design, each team member crafted their individual low-fidelity
          paper prototype to visualize the potential interaction flow for the
          desired functionalities. Below is the stop-motion video showcasing the
          paper prototype I developed:
        </p>

        <h3>Low Fidelity Prototypes </h3>
        <div className="iframe-container">
          <iframe
            className="responsive-iframe"
            src="https://drive.google.com/file/d/1lw3voEjuOGXa5Lg08kpwf7AlyB9rR4Dq/preview"
            allow="autoplay"
          ></iframe>
        </div>

        <h2>High Fidelity Prototype</h2>

        <p>
          Following user testing of each of our four distinct paper prototypes,
          we consolidated and evaluated the feedback to guide the design of the
          initial high-fidelity iteration for both our mobile and in-flight
          applications.
        </p>
        <div className="split-screen-prototyping">
          <img
            className="images"
            src="/prototypes.png"
            alt="Screen Prototypes"
          />
          <br />
          <br />
          <img
            className="images"
            src="/in-flight-app.png"
            alt="Screen Prototypes"
          />
        </div>

        <h1>Conclusion</h1>

        <p>
          Our team showcased our app design at Cornell's 2022 Fall Information
          Science Showcase, where it was recognized as one of the most socially
          impactful ideas of the year. Our professor now uses this project as an
          exemplary model for future semesters of teaching!
          <br />
        </p>
        <div className="center-div">
          <img
            className="group-pic"
            src="/group-pic.jpg"
            alt="Screen Prototypes"
          />
          <cite>
            Picture of the team presenting at the showcase (Left to Right) Dina
            Lagacy, Sumi Xu, Elisha Wang, Me
          </cite>
        </div>
        <p>
          This was one of my first full UX/UI projects and it was the spark for
          my design passion. It confirmed that UX design encomapsses everything
          I enjoy: research, design, working as a team, and the opportunity to
          creatively assist others through my work and knowledge. This was an
          amazing experience I am super glad to have the chance to show it on my
          website. I proceeded to take advanced classes regarding User Centered
          Design and Research Methods in my senior year.
        </p>
      </div>
    </div>
  );
};

export default Project3Page;
