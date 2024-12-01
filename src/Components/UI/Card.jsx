import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Card = ({ resData }) => {
  const mode = useSelector((state) => state.cart.mode);
  // console.log("mode from state",state)

  const navigate = useNavigate();
  const redirectHandler = () => {
    navigate(`/restaurant/${resData.info.id}`);
  };
  return (
    <div
      className="border rounded-md shadow-md w-64 min-w-40 my-3 mx-auto max-w-72 cursor-pointer "
      onClick={redirectHandler}
    >
      <img
        src={`./images/${resData.info.cloudinaryImageId}.avif`}
        alt="image"
        className="w-full h-44 rounded-t-md"
      />
      <div className={`p-2 flex ${mode==="dark" ?"text-gray-300":"text-gray-700"} flex-col gap-1`}>
        <h2 className={`font-bold text-lg truncate ${mode==="dark"?"text-white":"text-black"}`}>{resData.info.name}</h2>
        <p className="text-md truncate">
          {resData.info.cuisines.join(", ")}
        </p>
        <p className="text-lg ">{resData.info.costForTwo}</p>
        <div className="flex justify-between items-center">
          <button className="bg-green-700 text-white rounded-md px-3 py-1">
            {resData.info.avgRating} Rating
          </button>{" "}
          <span> 3.2 min</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
