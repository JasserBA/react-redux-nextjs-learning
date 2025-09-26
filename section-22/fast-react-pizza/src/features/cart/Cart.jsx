import { Link } from "react-router-dom";
import { LinkButton } from "../../ui/LinkButton";

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

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <LinkButton
        to="/menu"
        className="mb-6 inline-block text-blue-500 hover:text-blue-600"
      >
        &larr; Back to menu
      </LinkButton>

      <h2 className="text-2xl font-bold text-stone-800 mb-8">
        Your cart, <span className="text-blue-500">%NAME%</span>
      </h2>

      <div className="space-y-4 mb-6">
        {cart.map((item) => (
          <div
            key={item.pizzaId}
            className="flex justify-between items-center rounded-lg border border-stone-200 bg-white p-4 shadow-sm"
          >
            <div>
              <p className="font-semibold text-stone-800">{item.name}</p>
              <p className="text-sm text-stone-600">
                {item.quantity} × ${item.unitPrice}
              </p>
            </div>
            <span className="font-bold text-stone-800">${item.totalPrice}</span>
          </div>
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
          className="px-6 py-2 rounded-md border border-red-400 text-red-500 font-medium 
                     hover:bg-red-50 transition duration-200 focus:outline-none focus:ring focus:ring-red-300"
        >
          Clear cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
