import { useEffect, useRef, useState } from "react";
import { assets } from "../../assets/assets";
import "./Header.css";

const Header = () => {
  // Variables
  const [accountVisible, setAccountVisible] = useState(false);
  const sectionRefs = useRef([]);
  const [isScrolled, setIsScrolled] = useState(false);

  // Functions

  useEffect(() => {
    const handleIsScrolled = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else setIsScrolled(false);
    };

    window.addEventListener("scroll", handleIsScrolled);

    return () => {
      window.removeEventListener("scroll", handleIsScrolled);
    };
  }, []);

  const handleScroll = num => {
    console.log(sectionRefs.current);
    console.log(sectionRefs.current[num]);
    sectionRefs.current[num].scrollIntoView({ behaviour: "smooth" });
  };

  const handleAccountVisibility = () => {
    setAccountVisible(prev => !prev);
  };

  return (
    <>
      <header
        className={isScrolled ? "scrolled header" : "header"}
        ref={el => (sectionRefs.current[0] = el)}
      >
        <div className="logo">
          <img src={assets.egbinLogo} alt="company Logo" />
        </div>
        <nav className="nav">
          <ul>
            <li onClick={() => {}}>
              <a href="#"></a>Home
            </li>
            <li onClick={() => handleScroll(2)}>
              <a href="#"></a>Self Services
            </li>
            <li onClick={() => handleScroll(3)}>
              <a href="#"></a>About Us
            </li>
            <li onClick={() => handleScroll(4)}>
              <a href="#"></a>Contact Us
            </li>
          </ul>
          <div className="account-section">
            <img
              onClick={handleAccountVisibility}
              src={assets.accountIcon}
              alt="account icon"
            />
          </div>
        </nav>
        {accountVisible ? (
          <div className="account-dropdown">
            <div className="account-info">
              <div className="profile-pic">A</div>
              <p className="account-name">AINA, Oluwatobiloba Seun</p>
              <p className="account-mail">ainatobitobig@gmail.com</p>
            </div>
            <div className="account-features">
              <div className="theme">
                <img src={assets.settingsIcon} alt="theme icon" />
                <p>Theme(inprogress)</p>
              </div>
              <div className="settings">
                <img src={assets.settingsIcon} alt="settings icon" />
                <p>Settings</p>
              </div>
              <div className="log-out">
                <img src={assets.logOutIcon} alt="log-out icon" />
                <p>Log Out</p>
              </div>
            </div>
          </div>
        ) : null}
      </header>
    </>
  );
};

export default Header;
