import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="max-w-2xl mx-4 uppercase sm:mx-auto">
      <h1 className="text-2xl text-blue-500 font-bold text-center my-10">
        The best pizza.
        <br />
        Straight out of the oven, straight to you.
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
