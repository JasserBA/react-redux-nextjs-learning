import React from "react";
import { Link } from "react-router-dom";
import { SearchOrder } from "../features/order/SearchOrder";
import { Username } from "../features/user/Username";

export const Header = () => {
  return (
    <header className="font-sans bg-blue-500 p-4 flex justify-between items-center border-b-4 border-cyan-500 sm:rounded-b-lg sm:mx-4 sm:mt-4">
      <Link to="/" className="uppercase tracking-[0.3em] text-white font-bold">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
};
