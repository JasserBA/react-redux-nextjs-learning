import React from "react";
import { Link } from "react-router-dom";
import { SearchOrder } from "../features/order/SearchOrder";
import { Username } from "../features/user/Username";

export const Header = () => {
  return (
    <header className="bg-blue-500 p-4 flex justify-between items-center border-b-4 border-yellow-500">
      <Link to="/" className="uppercase tracking-[0.3em] text-white font-bold">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
};
