import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import { Header } from "./Header";
import { Loader } from "./Loader";

const AppLayout = () => {
  const navigation = useNavigation();
  console.log(navigation);
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />
      <main className="pt-4 pb-20 sm:pb-4 mx-auto w-full max-w-4xl">
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
};

export default AppLayout;
