import React from "react";
import {
  resourcesLinks,
  platformLinks,
  communityLinks,
} from "../constants/index";

function Footer() {
  return (
    <footer className="px-6 pt-20 mx-auto">
      <div className="grid items-center grid-cols-2 gap-4 border-t border-gray-600 md:grid-cols-3">
        <ul className="flex flex-col gap-2 mt-4">
          {resourcesLinks.map((item, index) => (
            <li key={index}>
              <a href={item.href}>{item.text}</a>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-2 mt-4">
          {platformLinks.map((item, index) => (
            <li key={index}>
              <a href={item.href}>{item.text}</a>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-2 mt-4">
          {communityLinks.map((item, index) => (
            <li key={index}>
              <a href={item.href}>{item.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
