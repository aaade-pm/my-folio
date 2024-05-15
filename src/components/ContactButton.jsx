const ContactButton = () => {
  const scrollToFooter = () => {
    const footer = document.getElementById("footer");
    footer.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="contact">
      <button onClick={scrollToFooter}>CONTACT</button>
    </div>
  );
};

export default ContactButton;
