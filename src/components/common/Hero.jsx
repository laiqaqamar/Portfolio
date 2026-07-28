import profileImg from "../../assets/profile.jpeg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="eyebrow">✦ Web Developer ✦</p>

        <h1 className="hero-name">
          LAIQA QAMAR
        </h1>

        <p className="hero-tagline">
          Building elegant, thoughtful software—with a touch of sparkle.
          Creating seamless digital experiences through clean code,
          creativity, and attention to detail. ✨
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>

          <a href="#contact" className="btn btn-outline">
            Get In Touch
          </a>
        </div>
      </div>

      <div className="hero-image-wrap">
        <img
          src={profileImg}
          alt="Laiqa Qamar"
          className="hero-photo"
        />

        <div className="frame-ring"></div>
      </div>
    </section>
  );
}