// components/Button.js

import React from "react";

const Button = ({ label }) => {
  return <button className="whitespace-nowrap gap-8 inline-block bg-white text-black font-bold py-2 px-4 rounded-full w-full h-10 text-center hover:bg-black hover:text-white">{label}</button>;
};

export default Button;
