import React, { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuToggleBtn, setMenuToggleBtn] = useState(false);
  const toggleBtn = () => {
    setMenuToggleBtn(!menuToggleBtn);
  };
  return (
    <header className="sticky top-0 w-full py-5 border-b max-h-80 backdrop-blur-lg border-neutral-700/80">
      <nav className="container relative flex items-center justify-between w-full h-full px-8 mx-auto lg:px-3">
        <div className="flex items-center justify-center w-10 lg:w-14">
          <a className="flex items-center justify-center w-full gap-2" href="#">
            <img className="object-cover w-full" src={logo} />
            <h2>VirtualFR</h2>
          </a>
        </div>
        <div className="hidden lg:block">
          <ul className="flex gap-5">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden gap-4 lg:flex">
          <a className="px-4 py-2 border rounded-lg border-slate-400" href="#">
            Sign In
          </a>
          <a className="px-4 py-2 bg-orange-500 rounded-lg" href="#">
            Create an account
          </a>
        </div>
        <div className="lg:hidden">
          <button className="absolute z-50 top-2 right-2" onClick={toggleBtn}>
            {menuToggleBtn ? <X /> : <Menu />}
          </button>
        </div>
        {menuToggleBtn && (
          <div className="fixed top-0 right-0 z-20 flex flex-col items-center justify-between min-h-screen w-80 bg-slate-500">
            <div className="lg:hidden">
              <ul className="flex flex-col gap-5 mt-24">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-4 mb-10 lg:hidden">
              <a
                className="px-4 py-2 text-sm border rounded-lg border-slate-400"
                href="#"
              >
                Sign In
              </a>
              <a
                className="px-4 py-2 text-sm bg-orange-500 rounded-lg"
                href="#"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
