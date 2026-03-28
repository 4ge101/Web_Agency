import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import "../styles/aboutTeam.css";
import ArrowIcon from "../assets/icons/arrow.svg";

const teamMembers = [
  {
    name: "Mohammad Sami Ali",
    title: "Lead Developer & Founder",
    role: "Architecture · Systems · Vision",
    description:
      "I'm a 15-year-old software developer passionate about building modern, high-performance digital products. I work across web, systems, and embedded technologies, focusing on clean code, scalable architecture, and real-world problem solving. Age doesn't define my skillset — execution does. I believe in learning fast, building faster, and shipping with purpose.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XKWAwiBesEKQ5NC4TUQV3Hfo7RiuCLdL9w&s",
    skills: ["React", "Rust", "C++", "Node.js", "Embedded Systems"],
    accent: "#5ef0d8",
    number: "01",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Nothing",
    title: "QA Engineer",
    role: "Frontend · Backend · AI",
    description:
      "Full-Stack Developer & Prompt Engineer skilled in building modern web apps and AI-powered solutions. Focused on clean code, scalable systems, and creating smart, efficient experiences.",
    img: "https://via.placeholder.com/400x500/1a1a2e/ffffff?text=AA",
    skills: ["Next.js", "Python", "AI/ML", "TypeScript", "PostgreSQL"],
    accent: "#e879f9",
    number: "02",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
 {
    name: "Ansh Bohara",
    title: "Cybersecurity",
    role: "Security . Testing",
    description:
      "Full-Stack Developer & Prompt Engineer skilled in building modern web apps and AI-powered solutions. Focused on clean code, scalable systems, and creating smart, efficient experiences.",
    img: "https://via.placeholder.com/400x500/1a1a2e/ffffff?text=AA",
    skills: ["Next.js", "Python", "AI/ML", "TypeScript", "PostgreSQL"],
    accent: "#e879f9",
    number: "03",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },];

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const AboutTeam = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePos({ x, y });
    setActiveCard(index);
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
    setActiveCard(null);
  };

  return (
    <div className="at-wrap">
      {/* Ambient blobs */}
      <div className="at-bg-blob at-bg-blob-1" />
      <div className="at-bg-blob at-bg-blob-2" />

      {/* Header */}
      <header className="at-header">
        <div>
          <div className="at-label">The People Behind</div>
          <h1 className="at-headline">
            Meet<br />Our <em>Team</em>
          </h1>
        </div>
        <div className="at-header-meta">
          <div className="at-member-count">0{teamMembers.length}</div>
          <p className="at-header-desc">
            A small, focused team building products that matter — fast,
            purposeful, and uncompromising on quality.
          </p>
        </div>
      </header>

      <div className="at-divider" />

      {/* Cards */}
      <section className="at-cards" ref={sectionRef}>
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`at-card ${isVisible ? "visible" : ""}`}
            style={{
              "--card-accent": member.accent,
              transform:
                activeCard === index
                  ? `perspective(1000px) rotateX(${-mousePos.y * 0.5}deg) rotateY(${mousePos.x * 0.5}deg)`
                  : undefined,
              transitionDelay: isVisible ? `${index * 0.15}s` : "0s",
            }}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="at-card-image-wrap">
              <img src={member.img} alt={member.name} />
              <div className="at-card-number">{member.number}</div>
            </div>

            <div className="at-card-accent-line" />

            <div className="at-card-body">
              <div className="at-card-role">{member.role}</div>
              <h2 className="at-card-name">{member.name}</h2>
              <p className="at-card-title">{member.title}</p>
              <p className="at-card-desc">{member.description}</p>

              <div className="at-skills">
                {member.skills.map((skill) => (
                  <span key={skill} className="at-skill-tag">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="at-socials">
                <a href={member.social.github} className="at-social-btn" aria-label="GitHub">
                  <GitHubIcon />
                </a>
                <a href={member.social.linkedin} className="at-social-btn" aria-label="LinkedIn">
                  <LinkedInIcon />
                </a>
                <a href={member.social.twitter} className="at-social-btn" aria-label="Twitter / X">
                  <TwitterIcon />
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA strip */}
      <div className="at-cta">
        <div className="at-cta-text">
          <h2>Want to work with us?</h2>
          <p>We're always open to interesting projects and collaborations.</p>
        </div>
        <Link to="/contact" className="at-cta-btn">
          Get in Touch <img src={ArrowIcon} alt="arrow-icon"></img>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default AboutTeam;
