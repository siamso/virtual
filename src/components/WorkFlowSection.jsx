import React from "react";
import code from "../assets/code.jpg";
import { checklistItems } from "../constants";
import { CircleCheckBig } from "lucide-react";

function WorkFlowSection() {
  return (
    <section className="mt-20" id="workflow">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="w-full m-4 my-6 text-3xl lg:text-5xl">
          Accelerate your{" "}
          <span className="text-orange-600">coding workflow</span>
        </h1>
        <div className="flex flex-col items-center justify-center gap-5 lg:flex-row">
          <div className="w-full lg:w-1/3">
            <img className="object-cover w-full" src={code} />
          </div>
          <ul className="flex flex-col gap-2 mt-4">
            {checklistItems.map((item, index) => (
              <li key={index} className="h-32 rounded-lg w-96 bg-slate-900">
                <div className="flex h-full">
                  <div className="flex justify-center w-20 m-2 mt-5 text-green-600">
                    <CircleCheckBig />
                  </div>
                  <div className="flex flex-col justify-between my-5 text-left">
                    <h2>{item.title}</h2>
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

export default WorkFlowSection;
