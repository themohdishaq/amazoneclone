import { LuMenu } from "react-icons/lu";
import { StateProps } from "../../../type";
import { useSelector, useDispatch } from "react-redux";

const BottomHeader = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state: StateProps) => state.next);

  return (
    <div className="w-full h-10 bg-amazon_light text-sm text-white px-4 flex items-center">
      <p className="flex items-center w-1/5 md:w-auto gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
        <LuMenu className="text-xl" /> All
      </p>
      <div className="h-full w-full md:w-auto overflow-x-auto flex items-center">
        <div className="flex whitespace-nowrap">
          <p className="md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
            Today &apos; s Deals
          </p>
          <p className="md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
            Customer Service
          </p>
          <p className="md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
            Registry
          </p>
          <p className="md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
            Gift Cards
          </p>
          <p className="md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
            Sell
          </p>
        </div>
      </div>
    </div>
  );
};

export default BottomHeader;
