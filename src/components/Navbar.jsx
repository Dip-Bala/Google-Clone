import React from 'react';
import {Link} from "react-router-dom";

function Navbar(props) {
  return (
    <div className = "navbar-container">
      <div className = "navbar-content">
        <Link to="/">
          <p className = "navbar-logo">
            Google 🔎
          </p>
        </Link>
        <button type="button" onClick = {props.handleClick}
        className = "bg-white p-3 "> {props.theme? '💡 Light' : '🌙 Dark'}</button>
      </div>

    </div>
  );
}

export default Navbar

