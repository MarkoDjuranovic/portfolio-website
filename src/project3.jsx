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
              Monitoring pets in real-time to alleviate concerns of owners while
              they are traveling by air.{" "}
            </h3>
          </div>
          <div className="center">
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
        <h1>Starting Problem</h1>
        <p>
          <i>
            Between 2010 and 2020, more than 250 pets lost their lives either
            during or right after air travel. These animals are confined in
            cargo areas with luggage and parcels, often lacking proper
            temperature regulation. In such instances, pet owners face
            significant challenges in holding pet transportation companies
            accountable for mistreatment or abuse, as it becomes difficult to
            pinpoint the exact reasons behind their pets' harm.
          </i>
        </p>

        <p>
          <b>Why it matters:</b> Pet owners view their animals as integral
          members of their family, making it significant to champion the safety
          of pets during air transportation. With no existing alternatives for
          pet air travel beyond major companies, owners find themselves
          compelled to endure the potentially harsh conditions these companies
          may provide. This situation adds unwarranted stress and anxiety for
          owners during their journeys.{" "}
        </p>
      </div>

      <div id="solution">
        <h1>Solution</h1>

        <p>
          As a collaborative team, we designed the Pawprints app, enabling the
          real-time monitoring of pets during transit. Our development includes
          an in-flight screen app that provides owners with live video feedback
          from a Bluetooth-enabled physical monitor placed with their pets in
          cargo. Additionally, we integrated a companion mobile app that allows
          for comprehensive location tracking from gate to gate.
        </p>

        <p>
          Through the establishment of a method to enhance transparency in the
          treatment of pets, our goal is to provide owners with peace of mind
          while simultaneously holding transportation companies accountable for
          improving the conditions for pets during transit.
        </p>
      </div>

      <div id="user-research">
        <h1>User Research</h1>

        <p>
          While operating within a college campus environment, our team enlisted
          interview participants from the student body at Cornell University who
          aligned with our target user group.
        </p>

        <img className="images" src="/user-research.svg" alt="" />
        <h3>Our main objective was to </h3>
        <ol>
          <li>
            Recognize the primary sources of stress and worries experienced by
            pet owners when transporting their animals via air travel, aiming to
            pinpoint potential areas for enhancement.
          </li>
          <li>
            Comprehend the preferences and criticisms of users regarding the
            existing pet air transportation system.
          </li>
          <li>
            Explore the external tools or resources that users depend on to
            facilitate seamless pet transportation.
          </li>
          <li>
            Recognize the emotions and concerns that users experience throughout
            the pet transportation process.
          </li>
        </ol>
        <p>
          We conducted interviews with a total of five participants, including
          both dog and cat owners. Each interview lasted approximately 45
          minutes. Our interview protocol comprised questions regarding typical
          travel habits, frustrations, and concerns related to transporting pets
          by air. Additionally, participants were specifically prompted to
          recall details about their most recent experience traveling with their
          pets. Furthermore, we asked them to showcase any items they own
          related to pet transport and elucidate how these products contribute
          to easing the overall process.
        </p>

        <img className="images" src="/affinity-pawprints.png" alt="" />
        <p>
          We synthesized our interview data into the following set of insights,
          as depicted in our affinity diagram. Subsequently, we formulated
          design requirements to effectively address the challenges encountered
          by our user group.
        </p>

        <h4>Our insights and requirements</h4>

        <ol>
          <li>
            Insight 1: Overwhelming experiences <br />
            The conditions experienced by pets in cargo during air travel can be
            distressing, with cramped spaces, loud noises, and limited access to
            food and water. Pet owners go to great lengths to prepare their pets
            for these conditions, including providing insulating blankets,
            restricting food and water intake before travel, and using relaxant
            treats. These additional care steps add to the stress of travel,
            which is already a challenging experience.
          </li>
          <li>
            Insight 2: Feelings of helplessness & worry <br />
            Pet owners often feel helpless and anxious when they have to
            transport their pets by air, as they perceive limited alternative
            options for transportation. They experience stress and worry when
            separated from their pets during the flight, as they lack knowledge
            about their pet's well-being and treatment. Common concerns include
            worries about the handling of pet crates by airline workers, the
            potential for dogs to be frightened by larger animals, and the
            security of the crates in the cargo cabin.
          </li>
          <li>
            Insight 3: More transparency
            <br />
            Pet owners express a strong desire for increased transparency
            regarding the treatment of their pets during air travel. They wish
            to have the ability to check on their pets while they are separated,
            particularly during long-haul flights, as the unfamiliar environment
            and extended separation can be stressful for both pets and owners.
            Additionally, pet owners seek more information about airline
            policies and the handling of pets by airline staff.
          </li>
          <li>
            Insight 4: Preference for monitoring while apart <br />
            Interviewees indicate a preference for being able to monitor their
            pets while they are separated, whether through trusted individuals
            or digital devices. This monitoring provides pet owners with peace
            of mind and helps alleviate the stress of being apart from their
            pets, as they can ensure their pets' well-being from a distance.
          </li>
        </ol>

        <h2>Key Requirements</h2>

        <p>
          Requirement 1: Awareness of pet's well-being and status Pet owners
          require the ability to stay informed about their pet's current status
          and well-being throughout the duration of air travel. This includes
          access to information about their pet's condition and welfare,
          ensuring that owners are aware of how their pets are faring during the
          journey.
          <br />
          Requirement 2: Knowledge of in-flight conditions Pet owners need to be
          informed about the current in-flight conditions for pets, particularly
          those traveling in cargo. This knowledge is essential for owners to
          understand the environment and circumstances their pets are
          experiencing during air travel.
          <br />
          Requirement 3: Transparency in employee behaviors and airline policies
          There is a need for transparency regarding the behaviors of airline
          employees and the policies that govern the treatment of pet travelers.
          Pet owners require clear and open communication about how airline
          staff handle pets and the specific policies in place to ensure the
          well-being and safety of pets during air travel.
        </p>
      </div>

      <div id="ideation">
        <h1>Existing Solution Analysis</h1>

        <p>
          There is a noticeable absence of products addressing the challenges
          within this particular problem domain. The primary concern within our
          defined problem space revolves around the anxiety and potential harm
          stemming from owners' lack of awareness throughout the entire pet
          transportation process. This encompasses understanding pet emotions
          and well-being, as well as how airlines handle animals post check-in.
          Consequently, our evaluation focused on existing solutions designed to
          monitor pets during periods of separation.
          <br />
          <br />
          The majority of these solutions involved applications that enable
          monitoring through photos and videos, linking to a physical device
          situated at home. Other products we examined included monitors for
          environmental or health metrics, measuring factors like air
          temperature, humidity, or body temperature. These metrics could prove
          valuable in assessing a pet's well-being from a distance. Remarkably,
          there are currently no products available that directly apply these
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
          <br /> A real-time, in-flight screen app connected to a physical
          Bluetooth monitoring device in the cargo cabin. This app displays pet
          health, physical conditions, and videos to owners during the flight.
          An associated mobile app that offers pre-flight pet status
          checkpoints, location information, and post-flight features such as
          receiving video clips and data history of pets. Additionally, it
          facilitates the formation of an owners' community with post-flight
          ratings and reviews.
          <br />
          <br />
          Rather than attempting to alter airline regulations, we recognized the
          significance of designing a human-centered product. By addressing the
          user's need to alleviate stress and worry about their pets during
          travel through real-time information updates, we aim to positively
          impact airline pet treatment. Empowering owners to provide evidence
          through monitoring against airlines in case of mistreatment can
          potentially encourage companies to be more cautious.
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

        <h3>Low Fidelity Prototype </h3>
        <video controls>
          <source src="/low-fidelity.mp4" type="video/mp4" />
        </video>

        <h2>High Fidelity Prototype</h2>

        <p>
          Following user testing of each of our four distinct paper prototypes,
          we consolidated and evaluated the feedback to guide the design of the
          initial high-fidelity iteration for both our mobile and in-flight
          applications.
        </p>
        <h2>1. Checking pet's current location and status</h2>
        <div className="split-screen-prototyping">
          <div className="left">
            <h1>Low Fidelity</h1>
          </div>

          <div className="right">
            <h1>High Fidelity</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project3Page;
