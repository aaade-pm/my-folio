// import React from 'react'
import socials from "../constant";

const FooterButton = () => {
  return (
    <div className="socials-container">
      {socials.map((social, index) => {
        return (
          <a href={social.link} key={index}>
            {social.name}
          </a>
        );
      })}
    </div>
  );
};

export default FooterButton;
