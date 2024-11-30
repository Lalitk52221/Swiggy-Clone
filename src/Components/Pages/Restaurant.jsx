import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Menu from "../UI/Menu";
import { MdCurrencyRupee } from "react-icons/md";

const Restaurant = () => {
  const [restaurant, setRestaurant] = useState([]);
  const params = useParams();
  const [menu, setMenu] = useState([]);

  const fetchData = async () => {
    const response = await fetch("./restaurant.json");
    const data = await response.json();
    setRestaurant(data);
  };
  const fetchMenu = async () => {
    const response = await fetch("./menu.json");
    const data = await response.json();
    setMenu(data);
  };
  useEffect(() => {
    fetchData();
    fetchMenu();
  }, []);

  const findRestaurant = () => {
    return restaurant.find((item) => item?.info?.id === params.resId);
  };
  const result = findRestaurant();


  return (
    <div className="w-full">
      <p className="text-gray-600 text-sm -mx-3">
        Home/Gurugram/{result?.info?.name}
      </p>
      <h1 className="lg:text-3xl md:text-2xl sm:text-xl font-bold py-3">{result?.info?.name}</h1>
      <div className="lg:text-2xl flex gap-8 font-semibold border-b-2 mb-8 items-center">
        <h1 className="border-b-4 border-red-600 lg:py-3 py-2">Order Online</h1>
        <h1 className="border-b-4 border-white lg:py-3 py-2">Dineout</h1>
      </div>

      <div className="my-2 w-full p-5 pt-0 xs:text-xs md:text-base lg:text-lg bg-white rounded-xl [background:linear-gradient(#fff_-6.71%,_#ebebf2_56.19%,_#dfdfe7_106.56%)]">
        <div className="w-full bg-white rounded-xl ">
          <div className="w-full p-4 rounded-t-xl bg-red-200 text-red-700 ">
            <p className="">
              Uh-oh! Outlet is not accepting orders at the moment. They should
              be back by 11:00 AM tomorrow
            </p>
          </div>
          <div className="p-4 flex flex-col gap-1">
            <p className="font-bold text-md flex items-center" >3.6 (100+ratings) • <MdCurrencyRupee />99 for two</p>
            <p className="text-red-700 underline">South Indian, Chinese</p>
            <p className="font-bold">
              Outlet <span className="text-gray-500">Cross Republic</span>
            </p>
            <p className="font-semibold">Closed & not delivering</p>
          </div>
        </div>
      </div>
      {menu.map((res,index)=>(
        <div key={index} className="lg:my-16">
          <p className="lg:text-2xl font-semibold border-b-2 rounded py-3 border-black w-[50%]">
         <span > {res.card.card.title}</span><span>({res.card.card.itemCards.length})</span>
         </p>
         <Menu res={res}/>
        </div>
      ))}
    </div>
  );
};

export default Restaurant;
