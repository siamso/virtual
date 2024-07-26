import React from "react";
import { pricingOptions } from "../constants";
import { CheckCheck } from "lucide-react";

function PricingSection() {
  return (
    <section className="mt-20" id="pricing">
      <div className="flex flex-col items-center justify-center">
        <h1 className="my-8 text-2xl lg:text-4xl">Pricing</h1>
        <div className="flex flex-col gap-4 lg:flex-row">
          {pricingOptions.map((item, index) => (
            <div
              className="flex flex-col cursor-pointer px-4 py-4 border border-gray-600 rounded-lg w-72 h-[450px] lg:h-[480px]"
              key={index}
            >
              <div>
                <h1 className="text-2xl lg:text-4xl">
                  {item.title}
                  {item.title === "Pro" && (
                    <span className="mx-2 text-sm text-orange-600">
                      (Most Popular)
                    </span>
                  )}
                </h1>
                <h2 className="flex items-center my-2 text-4xl lg:text-6xl">
                  {item.price}{" "}
                  <span className="mx-2 mt-4 text-sm text-gray-400">
                    /month
                  </span>
                </h2>
              </div>
              <ul className="flex flex-col gap-10 mt-10">
                {item.features.map((item, index) => (
                  <li className="" key={index}>
                    <div className="flex gap-2">
                      <span className="text-green-600">
                        <CheckCheck />
                      </span>
                      {item}
                    </div>
                  </li>
                ))}
              </ul>
              <a
                className="block w-full px-2 py-4 mt-5 text-center duration-300 border border-gray-600 rounded-lg cursor-pointer hover:bg-orange-600"
                href="#"
              >
                Subscribe
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
