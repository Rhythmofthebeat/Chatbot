import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          width: "100%",
          minHeight: "20vh",
          maxHeight: "30vh",
          marginTop: 60,
        }}
      >
        <p style={{ fontSize: "30px", textAlign: "center", padding: "20px" }}>
        Built by 
        <span>
          
            <Link
            
              style={{ color: "white", textTransform: "none" }}
              className="nav-link"
              to={"https://www.linkedin.com/in/rhythm-bazari-13b845253"}
              
            >
           Rhythm Bazari
            </Link>
          
          </span>
          and




          
          
          <span>
            <Link
            
              style={{ color: "white", textTransform: "none" }}
              className="nav-link"
              to={"http://minoritiesinstem.org"}
              
            >
           MinoritiesinSTEM 🔥
            </Link>
          
          </span>
           
        </p>
      </div>
    </footer>
  );
};

export default Footer;