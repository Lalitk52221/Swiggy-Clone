import { Outlet } from "react-router";
import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <div className="mx-5 md:mx-32 lg:mx-40 xs:-mt-10 md:m-0 lg:m-0 ">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default App;
