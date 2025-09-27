import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import { Button } from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="max-w-2xl mx-4 uppercase sm:mx-auto">
      <h1 className="text-2xl text-blue-500 font-bold text-center my-10">
        The best pizza.
        <br />
        Straight out of the oven, straight to you.
      </h1>
      {username === "" ? (
        <CreateUser />
      ) : (
        <Button to="/menu">Continue ordering, {username}</Button>
      )}
    </div>
  );
}

export default Home;
