import { Link } from "react-router-dom";
import { LinkButton } from "../../ui/LinkButton";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  { pizzaId: 6, name: "Vegetale", quantity: 1, unitPrice: 13, totalPrice: 13 },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;
  const username = useSelector((state) => state.user.username);
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <LinkButton
        to="/menu"
        className="mb-6 inline-block text-blue-500 hover:text-blue-600"
      >
        &larr; Back to menu
      </LinkButton>

      <h2 className="text-2xl font-bold text-stone-800 mb-8">
        Your cart, <span className="text-blue-500">{username}</span>
      </h2>

      <div className="space-y-4 mb-6">
        {cart.map((item) => (
          <CartItem key={item.pizzaId} item={item} />
        ))}
      </div>

      <div className="flex justify-between items-center">
        <Link
          to="/order/new"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md font-medium 
                     transition duration-200 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Order pizzas
        </Link>

        <button
          className="bg-red-100  px-6 py-2 rounded-md border border-red-400 text-red-500 font-medium 
                     hover:bg-red-50 transition duration-200 focus:outline-none focus:ring focus:ring-red-300"
        >
          Clear cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
