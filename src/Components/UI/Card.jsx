import { Link, useNavigate, useParams } from "react-router-dom";

const Card = ({resData}) => {
  const navigate = useNavigate();
  const redirectHandler = ()=>{
    navigate(`/restaurant/${resData.info.id}`)
  }
  return (

    <div className="border rounded-md shadow-md w-64 min-w-40 my-3 mx-auto max-w-72 ">
      
      <img
        src={`./images/${resData.info.cloudinaryImageId}.avif`}
        alt="image"
        className="w-full h-44 rounded-t-md cursor-pointer"
        onClick={redirectHandler}
      />
      <div className="p-2 flex flex-col gap-1">

      <h2 className="font-bold text-lg truncate">{resData.info.name}</h2>
      <p className="text-md text-gray-700 truncate">{resData.info.cuisines.join(", ")}</p>
      <p className="text-lg text-gray-700">{resData.info.costForTwo}</p>
      <div className="flex justify-between items-center">
        <button className="bg-green-700 text-white rounded-md px-3 py-1">{resData.info.avgRating} Rating</button> <span className="text-gray-700"> 3.2 min</span>
      </div>
      </div>
    </div>

  );
};

export default Card;
