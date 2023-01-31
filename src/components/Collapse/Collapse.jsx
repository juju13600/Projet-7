import React, { useState } from "react";
import "./Collapse.css";
import arrowForRotate from "../../assets/arrowForRotate.svg";
function Collapse({ titre, description }) {
  const [ouvert, setOuvert] = useState(false);

  return (
    <div className="collapse" id={`collapse-${titre}`}>
      <div className="header-collapse">
        <div className="titre-collapse">{titre}</div>
        <span
          className={`fleche-collapse ${ouvert}`}
          onClick={() => setOuvert(!ouvert)}
        >
          <img src={arrowForRotate} alt="Ouvrir cette liste déroulante" />
        </span>
      </div>
      {
        /* Si le collapse est à TRUE alors il affichera la description */
        ouvert && <div className="description-collapse">{description}</div>
      }
    </div>
  );
}

export default Collapse;
