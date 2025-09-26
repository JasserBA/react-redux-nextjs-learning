import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="bg-stone-100  p-4">
      <p className="text-stone-300">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link
        to="/cart"
        className="text-sm text-yellow-400 hover:text-yellow-600"
      >
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
