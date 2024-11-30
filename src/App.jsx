import { Outlet } from "react-router";
import Header from "./Components/Common/Header";

const App = () => {
  return (
    <div>
      <Header />
      <div className="mx-10 md:mx-32 lg:mx-40 xs:-mt-10 md:m-0 lg:m-0 ">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
