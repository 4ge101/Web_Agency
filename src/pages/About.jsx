import "../styles/about.css";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-title-container">
          <div className="small-about-title">
            <span>ABOUT US</span>
          </div>
          <h1>We are a team of digital innovators</h1>
        </div>
        <div className="about-paragraph">
          <p>
            Since 2026, CodeDNA has been driving innovation in the digital
            space, collaborating with startups and businesses to craft
            exceptional online experiences. Our talented team of designers,
            developers, and strategists blend creativity with technology to
            deliver solutions that exceed expectations today and pave the way
            for tomorrow’s opportunities.
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
        <div className="about-box-container">
            <div className="about-box">
                <div className="box1 box">
                    <h1>1+</h1>
                    <span>Years of Excellence</span>
                </div>
                <div className="box2 box">
                    <h1>0</h1>
                    <span>Projects Completed</span>
                </div>
                <div className="box3 box">
                    <h1>0</h1>
                    <span>Team Members</span>
                </div>
                <div className="box4 box">
                    <h1>0L</h1>
                    <span>Client Satisfaction</span>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default About;
