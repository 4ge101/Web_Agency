import "../styles/about.css";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      <div className="about-title-container">
        <div className="small-about-title">
          <span>ABOUT US</span>
        </div>
        <h1>We are a team of digital innovators</h1>
      </div>
      <div className="about-content">
        <div className="about-left">
          <div className="about-paragraph">
            <p>
              Since 2026, Akesha has been driving innovation in the digital
              space, collaborating with startups and businesses to craft
              exceptional online experiences. Our talented team of designers,
              developers, and strategists blend creativity with technology to
              deliver solutions that exceed expectations today and pave the way
              for tomorrow's opportunities.
            </p>
          </div>
          <div className="list-container">
            <div className="list">
              <span>Innovative Approach</span>
              <p>
                We push boundaries and explore new technologies to create
                cutting-edge solutions.
              </p>
            </div>
            <div className="list">
              <span>Client-Centric</span>
              <p>
                Your success is our success. We invest deeply in understanding
                your vision and goals.
              </p>
            </div>
            <div className="list">
              <span>Excellence</span>
              <p>
                We maintain the highest standards in every project, delivering
                quality that exceeds expectations.
              </p>
            </div>
          </div>
        </div>
        <div className="about-box-container">
          <div className="about-box">
            <div className="box box1">
              <h1>1+</h1>
              <span>Years of Excellence</span>
            </div>
            <div className="box box2">
              <h1>0+</h1>
              <span>Projects Completed</span>
            </div>
            <div className="box box3">
              <h1>2+</h1>
              <span>Team Members</span>
            </div>
            <div className="box box4">
              <h1>0%</h1>
              <span>Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
      <div className="number-container">
        <div className="number">
          <h1>0</h1>
          <span>Projects Delivered</span>
        </div>
        <div className="number">
          <h1>2</h1>
          <span>Team Members</span>
        </div>
        <div className="number">
          <h1>0%</h1>
          <span>Client Satisfaction</span>
        </div>
        <div className="number">
          <h1>1+</h1>
          <span>Years Experience</span>
        </div>
      </div>
      <div className="big-box-container">
        <div className="big-box">
          <div className="big-box-title">
            <h1>Let's Create Something Extraordinary</h1>
            <span>Ready to transform your vision into reality?</span>
          </div>
          <div className="box-btn">
            <button onClick={() => navigate('/contact')}>
              Start Your Journey
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="40"
                height="40"
                color="#ffffff"
                fill="none"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18.5 12L4.99997 12" />
                <path d="M13 18C13 18 19 13.5811 19 12C19 10.4188 13 6 13 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;