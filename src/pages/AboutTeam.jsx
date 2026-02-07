import "../styles/aboutTeam.css";
import Footer from "../components/Footer.jsx";

const teamMembers = [
  {
    name: "Mohammad Sami Ali",
    title: "Lead Developer & Founder",
    description:
      "I'm a 15-year-old software developer passionate about building modern, high-performance digital products. I work across web, systems, and embedded technologies, focusing on clean code, scalable architecture, and real-world problem solving. Age doesn't define my skillset — execution does. I believe in learning fast, building faster, and shipping with purpose.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XKWAwiBesEKQ5NC4TUQV3Hfo7RiuCLdL9w&s",
  },
  {
    name: "Affan Alam",
    title: "Fullstack Developer & Prompt Engineer",
    description:
      "Full-Stack Developer & Prompt Engineer skilled in building modern web apps and AI-powered solutions. Focused on clean code, scalable systems, and creating smart, efficient experiences.",
    img: "https://via.placeholder.com/300x400",
  },
];

const AboutTeam = () => {
  return (
    <div className="about-team-container">
      <div className="about-team-title">
        <h1>
          Meet Our <span>Team</span>
        </h1>
      </div>

      <div className="about-team-card-container">
        {teamMembers.map((member, index) => (
          <div className="about-team-card" key={index}>
            <img src={member.img} alt={member.name} />
            <div className="about-team-information">
              <div className="about-team-card-name">
                <h1>{member.name}</h1>
              </div>
              <div className="about-team-card-title">
                <h1>{member.title}</h1>
              </div>
              <div className="about-team-card-description">
                <p>{member.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default AboutTeam;
