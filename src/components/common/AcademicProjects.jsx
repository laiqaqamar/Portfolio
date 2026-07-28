import ProjectCard from "../shared/ProjectCard";
import helmetImg from "../../assets/helmet.png";
import doorImg from "../../assets/door.jpg";
import spotifyImg from "../../assets/spotify.jpg";

export default function AcademicProjects() {
  return (
    <section
      id="academics"
      className="section academics"
    >
      <h2 className="section-title">
        Academic Projects
      </h2>

      <p className="section-subtitle">
        Projects completed during my studies.
      </p>

      <div className="card-grid">
      <ProjectCard
          title="Spotify clone"
          tech="React.js, React Router, Axios, CSS/Tailwind CSS, Node.js, Express.js, MongoDB, HTML5 Audio API, Local uploads , Git & GitHub"
          description="A Spotify clone featuring music streaming, playlists."
          image={spotifyImg}
        />
        <ProjectCard
          title="Smart Helmet"
          tech="IoT • ESP32 • Firebase"
          description="An IoT-based Smart Helmet with crash detection, health monitoring, GPS tracking, voice commands, and emergency SOS alerts."
         image={helmetImg}
        />

        <ProjectCard
          title="Bluetooth Door Lock System"
          tech="ESP32 • Bluetooth • Embedded Systems"
          description="A smart door lock controlled using Bluetooth, passcode authentication, and RFID card access."
          image={doorImg}
        />
       
      </div>

    </section>
  );
}