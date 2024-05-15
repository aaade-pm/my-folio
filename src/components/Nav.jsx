import ContactButton from "./ContactButton";
import boy from "../assets/boy.png";

const Nav = () => {
  const surname = "OLATUNJI E.";
  const middlename = "ADEMOLA";
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div className="nav">
      <div className="header-name">
        <h1>{surname}</h1>
        <h1>
          {middlename}
          <span>
            <img src={boy} alt="boy icon" />
          </span>
        </h1>
      </div>
      <div className="header-title">
        <h3>LAGOS, NG</h3>
        <h3>{currentTime}</h3>
        <ContactButton />
      </div>
    </div>
  );
};

export default Nav;
