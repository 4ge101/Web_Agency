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

            <span className="circle-icon-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="26"
                height="26"
                color="#ffffff"
                fill="none"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M11.1004 3.00208C7.4515 3.00864 5.54073 3.09822 4.31962 4.31931C3.00183 5.63706 3.00183 7.75796 3.00183 11.9997C3.00183 16.2415 3.00183 18.3624 4.31962 19.6801C5.6374 20.9979 7.75836 20.9979 12.0003 20.9979C16.2421 20.9979 18.3631 20.9979 19.6809 19.6801C20.902 18.4591 20.9916 16.5484 20.9982 12.8996" />
                <path d="M20.4803 3.51751L14.931 9.0515M20.4803 3.51751C19.9863 3.023 16.6587 3.0691 15.9552 3.0791M20.4803 3.51751C20.9742 4.01202 20.9282 7.34329 20.9182 8.04754" />
              </svg>
            </span>

            <div className="card-title-bottom">
              <h1>CONSTRUCTION</h1>
            </div>
            <div className="small-project-btn">
              <p>
                View Project
                <svg
                  className="small-project-btn-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  color="#bbb5b5"
                  fill="none"
                  stroke="#bbb5b5"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18.5 12L4.99997 12" />
                  <path d="M13 18C13 18 19 13.5811 19 12C19 10.4188 13 6 13 6" />
                </svg>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
