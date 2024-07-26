import React from "react";
import { features } from "../constants";

function FeaturesSection() {
  return (
    <section className="mt-6" id="features">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="m-4">
          <h3 className="mb-4 text-xs lg:text-sm">FEATURE</h3>
          <h1 className="w-full m-4 text-3xl lg:text-5xl">
            Easily Build <span className="text-orange-500">Your Code</span>
          </h1>
        </div>
        <div>
          <ul className="grid grid-cols-1 gap-5 lg:grid-cols-3 md:grid-cols-2 place-items-center">
            {features.map((item, index) => (
              <li key={index} className="rounded-lg h-36 w-96 bg-slate-900">
                <div className="flex h-full">
                  <div className="flex justify-center w-20 m-2 mt-5 text-orange-600">
                    {item.icon}
                  </div>
                  <div className="flex flex-col justify-between my-5 text-left">
                    <h2>{item.text}</h2>
                    <p className="text-xs text-gray-400 lg:text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
