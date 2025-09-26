import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/helpers";
import { Button } from "../../ui/Button";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li
      key={pizzaId}
      className="flex justify-between items-center bg-white border border-stone-200 rounded-lg p-4 shadow-sm"
    >
      <div className="flex flex-col">
        <p className="font-semibold text-stone-800">
          {quantity} &times; {name}
        </p>
        <p className="text-stone-600 text-sm">{formatCurrency(totalPrice)}</p>
      </div>

      <div>
        <Button className="px-4 py-2 bg-red-500 text-white hover:bg-red-600 rounded-md text-sm">
          Delete
        </Button>
      </div>
    </li>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    pizzaId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
