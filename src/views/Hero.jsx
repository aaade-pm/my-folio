import Nav from "../components/Nav";

const Hero = () => {
  const desc1 = "FRONTEND";
  const desc2 = "DEVELOPER";
  const aboutMe1 = `🖐🏽 Hey there! I'm Ademola, a frontend developer passionate about creating stunning digital experiences.`;
  const aboutMe2 = `🚀 I'm a curious learner, always honing my skills and exploring ways to build efficiently.`;
  const aboutMe3 = `🌟 I'm currently open to new opportunities and excited to work on projects that challenge me and push me to grow.`;

  return (
    <div className="hero">
      <div className="scroll-watcher"></div>
      <Nav />
      <header className="header">
        <div className="header-descriptions">
          <div className="header-description">
            {desc1.split("").map((letter, index) => {
              return <h1 key={index}>{letter}</h1>;
            })}
          </div>

          <div className="header-description">
            {desc2.split("").map((letter, index) => {
              return <h1 key={index}>{letter}</h1>;
            })}
          </div>
        </div>
        <div className="about">
          <p>{aboutMe1}</p>
          <p>{aboutMe2}</p>
          <p>{aboutMe3}</p>
        </div>
      </header>
    </div>
  );
};

export default Hero;
