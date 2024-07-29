import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SiMediamarkt } from "react-icons/si";
import FormattedPrice from "./FormattedPrice";
import { StateProps, StoreProduct } from "../../type";

const CartPayment = () => {
    const { productData } = useSelector((state: StateProps) => state.next);
    const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let amt = 0;
    productData.map((item: StoreProduct) => {
      amt += item.price * item.quantity;
      return;
    });
    setTotalAmount(amt);
  }, [productData]);

    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center"> {/* Add alignment for better visual */}
                <span className="bg-green-600 rounded-full p-1 h-6 w-6 text-sm text-white flex items-center justify-center mt-1">
                    <SiMediamarkt />
                </span>
                <p className="text-sm md:text-base">Your order is eligible for FREE Delivery.</p>
            </div>
            <p className="flex items-center justify-between px-2 font-semibold text-sm md:text-base">
                Total: <span className="font-bold text-lg md:text-xl"><FormattedPrice amount={totalAmount} /></span>
            </p>
            <div className="flex flex-col items-center">
                <button
                    className="w-full px-4 py-2 text-sm md:text-base font-semibold bg-amazon_blue bg-opacity-50 text-white rounded-lg" // Add padding
                    onClick={() => alert("Please login to continue")}
                >
                    Proceed to Buy
                </button>
                <p className="text-xs md:text-sm mt-1 text-red-500 font-semibold animate-bounce">
                    Please login to continue
                </p>
            </div>
        </div>
    );
};

export default CartPayment;
