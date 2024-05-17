import React, { useState } from "react";
import logo from "../images/logo.svg";
import avatar from "../images/image-avatar.png";
import menu from "../images/icon-menu.svg";
import close from "../images/icon-close.svg";
import { FaCartShopping } from "react-icons/fa6";
import Cart from "./Cart";

function Header() {
  const [isOpen, setIsOPen] = useState(false);
  const [openCart, setOpenCart] = useState(false)
  return (
    <header className="flex items-center justify-between p-8 border-b border-slate-400 max-w-7xl mx-auto relative">
      <div className="flex items-center justify-start gap-4">
        <ul className="flex items-center justify-start gap-2">
          {!isOpen && (
            <li className="lg:hidden" onClick={() => setIsOPen(true)}>
              <img src={menu} alt="logo" className="cursor-pointer w-5" />
            </li>
          )}

        

          <li>
            <img src={logo} alt="logo" />
          </li>
        </ul>

        <nav className={isOpen && "open"}>
        {isOpen && (
            <li className="lg:hidden" onClick={() => setIsOPen(false)}>
              <img src={close} alt="logo" className="cursor-pointer close" />
            </li>
          )}
          <ul className="">
            <li></li>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>

      <div>
        <ul className="flex items-center justify-start gap-4">
          <li>
            <button onClick={ () => setOpenCart(!openCart)}>
              {" "}
              <FaCartShopping className="text-2xl text-slate-600" />{" "}
            </button>
          </li>
          <li>
            { openCart && (<Cart/>)}
          </li>
          <li>
            <img src={avatar} alt="avatar" className="w-12" />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
