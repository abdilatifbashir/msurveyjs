import React from "react";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <span style={{marginRight:"30px"}}>
        <Link to="/survey-creator">create survey</Link>
      </span>

       <span>
        <Link to="/survey">survey</Link>
      </span>
    </div>
  );
};

export default Layout;
