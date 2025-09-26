import { formatCurrency } from "../../utils/helpers";
import PropTypes from "prop-types";
import { Button } from "../../ui/Button";
function MenuItem({ pizza }) {
  const { name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex gap-4 border-b border-b-stone-200 p-4 hover:bg-stone-200 sm:p-6">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "grayscale opacity-70" : ""}`}
      />
      <div className="flex flex-col flex-1">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto text-right font-bold flex flex-grow items-center justify-between">
          {!soldOut ? (
            <p className="text-sm uppercase font-medium">
              {formatCurrency(unitPrice)}
            </p>
          ) : (
            <p>Sold out</p>
          )}

          <Button>Add to cart</Button>
        </div>
      </div>
    </li>
  );
}

MenuItem.propTypes = {
  pizza: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    unitPrice: PropTypes.number.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    soldOut: PropTypes.bool.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default MenuItem;
