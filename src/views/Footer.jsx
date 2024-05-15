import FooterButton from "../components/FooterButton";

const Footer = () => {
  const emailName = "olatunjiademolaimmanuel";
  const emailDomain = "@gmail.com";
  const seyiFolio = "https://www.seyi.dev/";
  return (
    <div>
      <footer className="footer" id="footer">
        <div className="footer-email">
          <p>{emailName}</p>
          <p>{emailDomain}</p>
        </div>

        <div className="footer-socials">
          <FooterButton />
        </div>
        <div className="inspired">
          <p>
            Folio inspiration from
            <span>
              <a href={seyiFolio}>seyi.dev </a>
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
