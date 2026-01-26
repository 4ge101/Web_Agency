import "../styles/project.css";
import MyImage from "../assets/icons/sami.png";

const Project = () => {
  return (
    <>
      <div className="project-container">
        <div className="small-project-title">
          <span>FEATURED WORK</span>
        </div>
        <div className="project-title">
          <h1>FEATURED WORK</h1>
          <div className="project-btn">
            <button>View All</button>
          </div>
        </div>
        <div className="project-card-container">
          <div className="card-container">
            <img className="card-image" src={MyImage} alt="it's my name" />

            <div className="card-title-top">
              <span>Web Development</span>
            </div>

            <div className="card-title-bottom">
              <h1>CONSTRUCTION</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
