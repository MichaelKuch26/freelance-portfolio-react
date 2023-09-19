import "./style.css";

import insta from "./../../img/icons/instagram.svg";
import vk from "./../../img/icons/vk.svg";
import twitter from "./../../img/icons/twitter.svg";
import git from "./../../img/icons/gitHub.svg";
import linked from "./../../img/icons/linkedIn.svg";

const Footer = () => {
  return ( 
<footer className="footer">
  <div className="container">
    <div className="footer__wrapper">
      <ul className="social">
        <li className="social__item"><a href="#!"><img src={vk} alt="Link"/></a></li>
        <li className="social__item"><a href="#!"><img src={insta} alt="Link"/></a></li>
        <li className="social__item"><a href="#!"><img src={twitter} alt="Link"/></a></li>
        <li className="social__item"><a href="#!"><img src={git} alt="Link"/></a></li>
        <li className="social__item"><a href="#!"><img src={linked} alt="Link"/></a></li>
      </ul>
      <div className="copyright">
        <p>© 2023 frontend-dev.com</p>
      </div>
    </div>
  </div>
</footer>     
);
}

export default Footer;