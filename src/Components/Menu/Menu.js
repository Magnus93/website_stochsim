import React from "react";
import { Link } from "react-router-dom";
import './Menu.css';
import Logo from '../../Images/stochsd.svg'; 
import Bath from '../../Images/bath.png';

const menu = () => {
  return (
    <div className="menu">
      <img src={Logo} alt="Icon is missing" id="iconImg" />
			<h1>StochSD</h1>
      <ul>
        <li><Link to="/home">Purpose of Stochastic Simulation - StochSD</Link></li>
        <li><Link to="/stochsd_software">StochSD Software</Link>
        <ul>
          <li><a href="https://sourceforge.net/projects/stochsd/files/" target="_blank">Download</a></li>
          <li><a href="https://stochsd.sourceforge.io/software/" target="_blank">Try online</a></li>
        </ul>
        </li>
        <li><Link to="/stochsd_and_statres_manuels">StochSD User's Manuals</Link></li>
        <li><Link to="/example_models">Example Models</Link></li>
      </ul>
			<img src={Bath} alt={"Bath here"} id="bathImg" />
    </div>
  );
};

export default menu;
