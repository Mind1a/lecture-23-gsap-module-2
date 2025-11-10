import React from "react";
import { cocktailLists, mockTailLists } from "../../constants";

const Cocktails = () => {
  return (
    <section id="cocktails" className="noisy">
      <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id="c-left-leaf" />
      <img
        src="/images/cocktail-right-leaf.png"
        alt="r-leaf"
        id="c-right-leaf"
      />

      <div className="container mx-auto relative z-10 flex md:flex-row flex-col justify-between items-start gap-20 pt-40 max-w-7xl px-5">
        <div className="space-y-8 w-full md:w-fit">
          <h2 className="text-xl font-medium">Most popular cocktails:</h2>

          <ul className="space-y-8">
            {cocktailLists.map(({ name, country, detail, price }) => (
              <li key={name} className="flex justify-between items-start">
                <div className="md:me-28">
                  <h3 className="font-modern-negra 2xl:text-3xl text-xl text-yellow">
                    {name}
                  </h3>
                  <p className="text-sm">
                    {country} | {detail}
                  </p>
                </div>
                <span className="text-xl font-medium">- {price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-8 w-full md:w-fit pb-20 md:pb-0">
          <h2>Most loved mocktails:</h2>

          <ul className="space-y-8">
            {mockTailLists.map(({ name, country, detail, price }) => (
              <li key={name} className="flex justify-between items-start">
                <div className="me-28">
                  <h3 className="font-modern-negra 2xl:text-3xl text-xl text-yellow">
                    {name}
                  </h3>
                  <p className="text-sm">
                    {country} | {detail}
                  </p>
                </div>
                <span className="text-xl font-medium">- {price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
