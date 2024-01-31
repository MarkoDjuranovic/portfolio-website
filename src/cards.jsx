import React from "react";
import "./cards.css";

const ProjectCard = ({ imageUrl, title, description, onClick }) => {
  return (
    <div className="project-card" onClick={onClick}>
      <img src={imageUrl} alt={title} />
      <div className="card-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
