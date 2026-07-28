import aboutImg from "../../assets/about.jpg";

export default function About() {
  return (
    <section id="about" className="section about">

      <h2 className="section-title">
        
      </h2>

      <div className="about-content">

        <div className="about-photo">
          <img
            src={aboutImg}
            alt="Laiqa Qamar"
            className="about-image"
          />
        </div>

        <div className="about-text">

          
            <p> <h1>ABOUT ME</h1>
            

           I'm a Computer Science student and aspiring Full Stack Developer with a passion for building modern,
           user-friendly web applications and innovative IoT solutions.
           I enjoy solving real-world problems through technology, continuously learning new skills,
           and creating projects that make a meaningful impact. Currently, 
           I'm gaining hands-on experience through a Full Stack Development
          internship while expanding my expertise in modern web technologies.


        
          </p>

        </div>

      </div>

    </section>
  );
}