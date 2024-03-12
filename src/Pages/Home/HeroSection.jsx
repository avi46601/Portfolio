export default function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--img">
          <img src="./img/about-me.png" alt="Hero Section" />
        </div>
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hey, I'm Abhishek</p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">Web Developer</span>{" "}
              
            </h1>
            <p className="hero--section-description">
            I create awesome websites and solve complex problems using C++.<br>
            </br> I love making digital magic with a mix of creativity and precision.
            </p>
          </div>
          <button className="btn btn-primary">Get In Touch</button>
        </div>
        
      </section>
    );
  }