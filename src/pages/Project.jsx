import "../styles/project.css";
import { forwardRef } from "react";
import mockup_image from '../assets//mockup-images/mockup1.png'

const projectsData = [
  {
    id: 1,
    image: mockup_image,
    category: "Web Development",
    title: "CONSTRUCTION",
    link: "#",
  },
  {
    id: 2,
    image: mockup_image,
    category: "UI/UX Design",
    title: "PORTFOLIO",
    link: "#",
  },
];

const LocationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="26"
    height="26"
    color="#ffffff"
    fill="none"
    stroke="#ffffff"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C5.08963 4.09916 8.45834 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C22.9082 13.4393 17.599 17.6389 13.6177 21.367Z" />
    <path d="M11.1004 3.00208C7.4515 3.00864 5.54073 3.09822 4.31962 4.31931C3.00183 5.63706 3.00183 7.75796 3.00183 11.9997C3.00183 16.2415 3.00183 18.3624 4.31962 19.6801C5.6374 20.9979 7.75836 20.9979 12.0003 20.9979C16.2421 20.9979 18.3631 20.9979 19.6809 19.6801C20.902 18.4591 20.9916 16.5484 20.9982 12.8996" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    className="small-project-btn-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="#bbb5b5"
    fill="none"
    stroke="#bbb5b5"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18.5 12L4.99997 12" />
    <path d="M13 18C13 18 19 13.5811 19 12C19 10.4188 13 6 13 6" />
  </svg>
);

const ProjectCard = ({ image, category, title, link }) => (
  <div className="card-container">
    <img className="card-image" src={image} alt={title} />
    <div className="card-title-top">
      <span>{category}</span>
    </div>
    <span className="circle-icon-container">
      <LocationIcon />
    </span>
    <div className="card-title-bottom">
      <h1>{title}</h1>
    </div>
    <div className="small-project-btn">
      <p>
        <a href={link} style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center", gap: "6px" }}>
          View Project
          <ArrowIcon />
        </a>
      </p>
    </div>
  </div>
);

const Project = forwardRef((props, ref) => {
  return (
    <section ref={ref}>
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
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              category={project.category}
              title={project.title}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

export default Project;
