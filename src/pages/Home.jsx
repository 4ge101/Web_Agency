import Hyperspeed from "../components/Hyperspeed";
import "../styles/home.css";
import Services from "./Services";
import ArrowIcon from "../assets/icons/arrow.svg";

const Home = () => {
  return (
    <div>
      <Hyperspeed
        effectOptions={{
          distortion: "xyDistortion",
          length: 400,
          roadWidth: 9,
          islandWidth: 2,
          lanesPerRoad: 3,
          fov: 90,
          fovSpeedUp: 150,
          speedUp: 3,
          carLightsFade: 0.4,
          totalSideLightSticks: 50,
          lightPairsPerRoadWay: 30,
          shoulderLinesWidthPercentage: 0.05,
          brokenLinesWidthPercentage: 0.1,
          brokenLinesLengthPercentage: 0.5,
          lightStickWidth: [0.02, 0.05],
          lightStickHeight: [0.3, 0.7],
          movingAwaySpeed: [20, 50],
          movingCloserSpeed: [-150, -230],
          carLightsLength: [20, 80],
          carLightsRadius: [0.03, 0.08],
          carWidthPercentage: [0.1, 0.5],
          carShiftX: [-0.5, 0.5],
          carFloorSeparation: [0, 0.1],
          colors: {
            roadColor: 526344,
            islandColor: 657930,
            background: 0,
            shoulderLines: 1250072,
            brokenLines: 1250072,
            leftCars: [8195355, 11076889, 16715818],
            rightCars: [15855310, 15131313, 14670218],
            sticks: 15855310,
          },
        }}
      />
      <div className="title-container">
        <div className="small-title">
          <span>✨Available for new projects</span>
        </div>
        <h1>
          <span>SMART</span> <span className="color-title">SOLUTIONS</span>{" "}
          <span>FOR</span> <span className="color-title">DIGITAL</span>{" "}
          <span>SUCCESS</span>
        </h1>
        <p>
          WE CREATE MODERN, USER-FRIENDLY WEBSITES AND APPS THAT HELP YOUR
          BUSINESS GROW. FROM DESGIN TO DEVELOPMENT, WE TURN YOUR IDEAS INTO
          DIGITAL SOLUTIONS THAT WORK.
        </p>
      </div>
      <div className="btn-container">
        <div className="your-project-btn">
          <button>
            Start Your Projects <img src={ArrowIcon} alt="arrow-icon" />
          </button>
        </div>
        <div className="showcase-btn">
          <button>View Showcase</button>
        </div>
      </div>
      <div class="explore-animation">
        <div class="bounce-wrapper">
          <p>Scroll to explore</p>
          <span class="stick"></span>
        </div>
      </div>
      <Services/>
    </div>
  );
};

export default Home;
