import React from 'react';
import {Link} from "react-router-dom";
import {Search} from "./Search";

export const Navbars = (props) => {
  return (
    <div className = "navbar-container">
      <div className = "navbar-content">
        <Link to="/">
          <p className = "navbar-logo">
            Google 🔎
          </p>
        </Link>
        <Search/>
        <button type="button" onClick = {props.handleClick}> {props.theme? '💡 Light' : '🌙 Dark'}</button>
      </div>

    </div>
  )
}
