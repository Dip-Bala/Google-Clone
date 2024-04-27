import React from 'react';
import {Link} from "react-router-dom";
import {Search} from "./Search";

export const Navbars = (props) => {
  return (
    <div className = "p-5  flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 dark:border-sky-200">
      <div className = "flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p className = "text-2xl bg-sky-300 font-bold text-white py-1 px-2 rounded dark:bg-gray-50 dark:text-gray-900">
            Google 🔎
          </p>
        </Link>
        <Search/>
        <button type="button" className="text-xl bg-cyam-300 dark:bg-cyam-200 dark:text-gray-900 bg-white border-2 border-black px-3 py-1 hover:shadow-lg" onClick = {props.handleClick}> {props.theme? '💡 Light' : '🌙 Dark'} </button>
      </div>

    </div>
  )
}
