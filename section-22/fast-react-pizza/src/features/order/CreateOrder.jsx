// https://uibakery.io/regex-library/phone-number

import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import { Button } from "../../ui/Button";

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

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

function CreateOrder() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const formErrors = useActionData();

  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-xl mb-8 font-semibold">
        Ready to order? Let&apos;s go!
      </h2>

      {/* <Form method="POST" action="/order/new"> */}
      <Form method="POST">
        <div className="mb-4">
          <label className="block mb-1 font-medium">First Name</label>
          <input className="input" type="text" name="customer" required />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Phone number</label>
          <div className="grow">
            <input className="input" type="tel" name="phone" required />
          </div>
          <p className="text-red-500 text-sm mt-1 bg-red-100 p-3 rounded-md">
            {formErrors?.phone && formErrors.phone}
          </p>
        </div>

        <div className="my-4">
          <label className="block mb-1 font-medium">Address</label>
          <div className="grow">
            <input className="input" type="text" name="address" required />
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <input
            className="h-6 w-6 accent-blue-400 focus:outline-none focus:ring focus:ring-blue-300"
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to give your order priority?</label>
        </div>

        <div className="mt-8 flex gap-4 items-center">
          <input hidden name="cart" value={JSON.stringify(cart)} />
          <Button disabled={isSubmitting}>
            {isSubmitting ? "Placing order..." : "Order now"}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };

  // If EVERYTHING is valid, create the new order
  // const newOrder = await createOrder(order);

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone = "Please give us a valid phone number";

  if (Object.keys(errors).length > 0) return errors;

  // return redirect(`/order/${newOrder.id}`);

  return null;
}

export default CreateOrder;
