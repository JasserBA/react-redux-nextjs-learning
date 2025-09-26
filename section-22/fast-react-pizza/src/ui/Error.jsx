import { useNavigate, useRouteError } from "react-router-dom";
import { Button } from "./Button";

function NotFound() {
  const navigate = useNavigate();
  const error = useRouteError();
  console.log(error);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-stone-100 px-4">
      <h1 className="text-3xl font-bold text-stone-800 mb-3">
        Something went wrong 😢
      </h1>

      <p className="text-stone-600 mb-6 text-center">
        You can&apos;t find order&nbsp;
        <span className="font-semibold text-stone-900">
          #{error?.data?.orderId || "unknown"}
        </span>
      </p>

      <Button to={() => navigate(-1)}>&larr; Go back</Button>
    </div>
  );
}

export default NotFound;
