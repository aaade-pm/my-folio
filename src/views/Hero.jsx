import Nav from "../components/Nav";

const Hero = () => {
  const desc1 = "FRONT";
  const desc2 = " —";
  const desc3 = "END";
  const desc4 = "DEVELOPER";
  const aboutMe1 = `🖐🏽 Hey there! I'm Ademola, a frontend developer passionate about creating stunning digital experiences.`;
  const aboutMe2 = `🚀 I'm a curious learner, always honing my skills and exploring ways to build efficiently.`;
  const aboutMe3 = `🌟 I'm currently open to new opportunities and excited to work on projects that challenge me and push me to grow.`;

  return (
    <>
      <div className="hero">
        <div className="scroll-watcher"></div>
        <Nav />
        <header className="header">
          <div className="header-descriptions">
            <div className="front">
              <div className="header-description first">
                {desc1.split("").map((letter, index) => {
                  return <h1 key={index}>{letter}</h1>;
                })}
              </div>

              <div className="end">
                <div className="dash">
                  {desc2.split("").map((letter, index) => {
                    return <h1 key={index}>{letter}</h1>;
                  })}
                </div>
                <div className="front-end">
                  {desc3.split("").map((letter, index) => {
                    return <h1 key={index}>{letter}</h1>;
                  })}
                </div>
              </div>
            </div>

            <div className="header-description">
              {desc4.split("").map((letter, index) => {
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
    </>
  );
};

export default Hero;
