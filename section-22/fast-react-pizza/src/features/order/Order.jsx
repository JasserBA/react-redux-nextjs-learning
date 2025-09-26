import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";

function Order() {
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const order = useLoaderData();

  const {
    id,
    status,
    priority,
    priorityPrice = 0,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <div className="bg-white border rounded-lg p-4 shadow-sm">
        <h2 className="text-xl font-semibold mb-2">Status</h2>
        <div className="flex items-center gap-4">
          {priority && (
            <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded">
              Priority
            </span>
          )}
          <span className="text-stone-700 font-medium">{status} order</span>
        </div>
      </div>

      <div className="bg-white border rounded-lg p-4 shadow-sm">
        <p className="text-stone-800">
          {deliveryIn >= 0
            ? `Only ${deliveryIn} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-sm text-stone-500">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <div className="bg-white border rounded-lg p-4 shadow-sm space-y-1">
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="font-semibold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>

      <div className="bg-white border rounded-lg p-4 shadow-sm">
        <h3 className="text-lg font-semibold mb-2">Order Items</h3>
        <ul className="space-y-2">
          {cart.map((item) => (
            <li key={item.pizzaId} className="flex justify-between">
              <span>
                {item.quantity} × {item.name}
              </span>
              <span>{formatCurrency(item.totalPrice)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  // Fetch order from API
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
