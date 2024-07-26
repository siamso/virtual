import React from "react";
import { testimonials } from "../constants";

function TestimonialsSection() {
  return (
    <section className="mt-20 " id="testimonials">
      <div className="flex flex-col items-center justify-center">
        <h1 className="my-10 text-3xl text-blue-700 lg:text-5xl">
          What People Are Saying
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 place-items-center">
          {testimonials.map((item, index) => (
            <div
              className="flex flex-col items-start justify-between px-3 py-2 border border-gray-600 rounded-lg lg:w-96 lg:h-60"
              key={index}
            >
              <p className="my-2">{item.text}</p>
              <div className="flex items-center justify-center w-full gap-3 my-2">
                <div className="flex items-center justify-center w-16 h-14">
                  <img
                    className="items-center object-cover w-3/4 rounded-full"
                    src={item.image}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <h1 className="">{item.user}</h1>
                  <span>{item.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
