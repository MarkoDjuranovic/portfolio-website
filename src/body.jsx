import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./cards.jsx";
import SocialIcons from "./socials.jsx";
import VideoBg from "./assets/background-video.mp4"  
import "./body.scss";

const Body = () => {

  return (
    <div className="main-body">
      <section id="home" className="intro-section">
        <div className="video-container">
        <video src={VideoBg}  autoPlay loop muted></video>
          <div className="overlay"></div>
          <div className="overlay-text">
            <div className="cover">
              <h1>Hi, I'm Marko.</h1>
              <p>
                I am a Senior at Cornell University /// <br></br> Division One
                Collegiate Rower ///
                <br /> Passionate Designer /// <br />
                Developer.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="about-me-section">
        <div className="container-wrapper">
          <div className="heading">
            <h2>About Me</h2>
          </div>
          <div className="row-about-me">
            <div className="about-me-text">
              <p>
                I come from Belgrade, Serbia, where I've learned to appreciate
                the richness of diverse stories and perspectives. Being
                open-minded is crucial, especially in the world of design, where
                everyone has a unique tale to tell.{" "}
              </p>
              <p>
                My design journey began in Ithaca, NY, at Cornell, where I
                discovered my passion for web design. Through advanced classes,
                I picked up essential insights into good design practices,
                focusing on Human-Centered Design and the importance of a great
                user experience.
              </p>
              <p>
                A bit about me: I'm currently studying Information Science with
                a focus on User Experience (UX) and User Interface (UI). Outside
                of academics, I love cars, video games, and rowing. I'm always
                up for making new friends, so feel free to reach out.
                Collaboration is something I enjoy, and I'm excited to connect
                with fellow enthusiasts!{" "}
              </p>
            </div>
            <div className="photo">
              <img className="image" src="resize.jpg" alt="Personal Photo" />
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="experience-section">
        <div className="container-wrapper">
          <div className="heading">
            <h2>Projects</h2>
          </div>
          <div className="row-projects">
            <div className="project-cards"></div>
            <div className="row-projects">
              <div className="project-cards">
                <Link to="/projects/project1">
                  <ProjectCard
                    title="DoseCheck Lite"
                    description="UX/UI Research and Design at Amalgam"
                    imageUrl="dose-check.png"
                    onClick={() => console.log("Clicked on Project 1")}
                  />
                </Link>

                <Link to="/projects/project2">
                  <ProjectCard
                    title="Journey To Go"
                    description="UX research at Amalgam, Making deliverables faster"
                    imageUrl="figma.png"
                    onClick={() => console.log("Clicked on Project 2")}
                  />
                </Link>

                <Link to="/projects/project3">
                  <ProjectCard
                    title="PawPrints"
                    description="UX Research and Design at Cornell"
                    imageUrl="paw.jpg"
                    onClick={() => console.log("Clicked on Project 3")}
                  />
                </Link>

                <p id="text1">Click on a project to learn more</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Add more sections as needed */}
      <section id="contact" className="contact-section">
        <div className="container-wrapper">
          <div className="heading">
            <h2>Contact Me</h2>
          </div>
          <div className="wrapper">
            <div className="text">
              <h2>Let's Connect</h2>
              <h2 className="gmail">
                <a href="mailto:md984@cornell.edu" target="_blank">
                  md984@cornell.edu
                </a>
              </h2>
              <p>
                I am always down to collaborate and discuss new ideas, and I
                also love making new friends. Don't hesitate, reach out!{" "}
              </p>
              <SocialIcons />
            </div>
          </div>
        </div>
      </section>

      <section id="footer" className="footer">
        <footer>
          <p>This website is hand-crafted with care. </p>

          <p>Copyright © Marko Djuranovic</p>
        </footer>
      </section>
    </div>
  );
};

export default Body;
