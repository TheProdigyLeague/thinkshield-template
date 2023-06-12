import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import "./app-bottom-bar.css";

const AppBottomBar = () => {
  return (
    <div className="bottom-nav-menu shadow-2">
      <ul className="flex justify-content-around pl-0">
        <li className="list-style-none">
          <a className="anchor-style-none" href="/">
            <div className="flex flex-column align-items-center justify-content-center pl-0">
              <BiHomeAlt size={24} color="red" />
              <div>
                <span>Home</span>
              </div>
            </div>
          </a>
        </li>
        <li className="list-style-none">
          <a className="anchor-style-none" href="/">
            <div className="flex flex-column align-items-center justify-content-center pl-0">
              <BiHomeAlt size={24} color="red" />
              <div>
                <span>Search</span>
              </div>
            </div>
          </a>
        </li>
        <li className="list-style-none">
          {" "}
          <div className="flex flex-column align-items-center justify-content-center">
            <BiHomeAlt size={24} />
            <div>
              <span>Categories</span>
            </div>
          </div>
        </li>
        <li className="list-style-none">
          {" "}
          <div className="flex flex-column align-items-center justify-content-center">
            <BiHomeAlt size={24} />
            <div>
              <span>Cart</span>
            </div>
          </div>
        </li>
        <li className="list-style-none">
          {" "}
          <div className="flex flex-column align-items-center justify-content-center">
            <BiHomeAlt size={24} />
            <div>
              <span>Account</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default AppBottomBar;
