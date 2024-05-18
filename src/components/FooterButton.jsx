// import React from 'react'
import data from "../constant";

const FooterButton = () => {
  return (
    <div className="socials-container">
      {data.socials.map((social, index) => {
        return (
          <a
            href={social.link}
            key={index}
            target="_blank"
            rel="noreferrer noopener"
          >
            {social.name}
          </a>
        );
      })}
    </div>
  );
};

export default FooterButton;
