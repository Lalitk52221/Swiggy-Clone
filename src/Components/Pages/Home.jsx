import { useState } from "react";
import Card from "../UI/Card";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const [resData,setResData] = useState([]);
  const mode = useSelector((state)=>state.cart.mode)

  const fetchData = async()=>{
    const response = await fetch("./restaurant.json")
    const data = await response.json();
    setResData(data);
  }

  useEffect(()=>{
    fetchData();
  },[])


  return (
    <div>
      <h1 className={`text-xl md:text-2xl font-semibold pb-4 `}>
        Restaurants with online food delivery in Gurugram
      </h1> <hr className={` border-[1px] ${mode==="dark"?"border-gray-200":"border-gray-700"}`} />
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 "> */}
      <div className="flex flex-wrap gap-6 p-6 mx-auto justify-center ">
        {resData.map((res,index)=>(
          <div key={index}>
               
            <Card resData={res}/>
          </div>
        ))}
      
      </div>
    </div>
  );
};

export default Home;
