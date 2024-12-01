import { MdCurrencyRupee } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Redux/Slicer";

const Menu = ({ res }) => {
  
  const rest = res.card.card.itemCards;
  const cart = useSelector((state) => state.cart);
  const mode = cart.mode
  // console.log(mode)
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col border-b-4 ">
      {rest.map((item) => {
        const itemId = item.card.info.id;
        const itemData = {
          id: itemId,
          name: item.card.info.name,
          price: item.card.info.defaultPrice / 100,
          imgName: item.card.info.imgName,
        };
        const quantity = cart[itemId]?.quantity || 0;

        return (
          <div
            key={itemId}
            className="flex justify-between items-center border-b lg:py-8 xs:py-5"
          >
            <div className="flex flex-col">
              <p className="lg:text-2xl lg:font-semibold xs:font-medium">{item.card.info.name}</p>{" "}
              <p className={`flex items-center ${mode==="dark"?"text-gray-400":""} text-gray-700 lg:text-lg`}>
                <MdCurrencyRupee />
                {item.card.info.defaultPrice / 100}
              </p>
            </div>
            <div className="relative text-center">
              <img
                src={`./images/${item.card.info.imgName}`}
                alt={`${item.card.info.imgName}`}
                className="rounded-lg lg:w-40 lg:h-24 xs:w-28 xs:h-20 border"
              />
              <div className="absolute -inset-4 flex items-end justify-center xs:text-xs">
                <div className={`${mode==="dark"?"bg-[black] ":"bg-white"} px-2 py-1 rounded-lg flex items-center gap-2 shadow-lg`}>
                  {quantity > 0 ? (
                    <button
                    className={`${mode==="dark"?"text-black bg-gray-300":" bg-gray-300"} px-3 lg:w-10 rounded font-bold`}
                      onClick={() => dispatch(decrement(itemId))}
                    >
                      -
                    </button>
                  ) : (
                    ""
                  )}

                  <span className="font-semibold">
                    {quantity > 0 ? quantity : "Add"}
                  </span>

                  <button
                    className={`${mode==="dark"?"text-black bg-gray-300":" bg-gray-300"} px-3 lg:w-10 rounded font-bold`}
                    onClick={() =>
                      dispatch(increment({ id: itemId, item: itemData }))
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
