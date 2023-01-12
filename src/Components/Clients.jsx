import React from "react";
import { airbnb, binance, coinbase, dropbox } from "../assets";

const Clients = () => {
  return (
    <section id="clients" className="py-10">
      {/* Global Container */}
      <div className="grid grid-cols-1 justify-items-center gap-y-10  content-center sm:grid-cols-4 gap-x-24 sm:items-center">
        <img src={airbnb} className="w-[192.25px]" alt="" />
        <img src={binance} className="w-[192.25px]" alt="" />
        <img src={coinbase} className="w-[192.25px]" alt="" />
        <img src={dropbox} className="w-[192.25px]" alt="" />
      </div>
    </section>
  );
};

export default Clients;
