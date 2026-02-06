import "../styles/aboutTeam.css";

const AboutTeam = () => {
  return (
    <>
      <div className="about-team-container">
        <div className="about-team-title">
          <h1>
            Me My <span>Team</span>
          </h1>
        </div>
        <div className="about-team-card-container">
          <div className="about-team-card">
            <div className="about-team-card-name">
              <h1>Mohammad Sami Ali</h1>
            </div>

            <div className="about-team-card-title">
              <h1>Lead Developer & Founder</h1>
            </div>

            <div className="about-team-card-description">
              <p>
                I'm a 15-year-old software developer passionate about building
                modern, high-performance digital products. I work across web,
                systems, and embedded technologies, focusing on clean code,
                scalable architecture, and real-world problem solving. Age
                doesn't define my skillset — execution does. I believe in
                learning fast, building faster, and shipping with purpose.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutTeam;
