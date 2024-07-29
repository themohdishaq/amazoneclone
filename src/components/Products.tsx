import React from "react";
import { ProductProps } from "../../type";
import Image from "next/image";
import { HiShoppingCart } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import FormattedPrice from "./FormattedPrice";
import { useDispatch } from "react-redux";
import { addToCart, addToFavorite } from "@/store/nextSlice";
import Link from "next/link";

const Products = ({ productData }: any) => {
  const dispatch = useDispatch();
  return (
    <div className="w-full px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {productData.map(
        ({
          _id,
          title,
          brand,
          category,
          description,
          image,
          isNew,
          oldPrice,
          price,
        }: ProductProps) => (
          <div
            key={_id}
            className="w-full bg-white text-black p-4 border border-gray-300 rounded-lg group overflow-hidden relative"
          >
            <div className="w-full h-[260px] relative overflow-hidden">
              <Link
                href={{
                  pathname: `/${_id}`,
                  query: {
                    _id: _id,
                    brand: brand,
                    category: category,
                    description: description,
                    image: image,
                    isNew: isNew,
                    oldPrice: oldPrice,
                    price: price,
                    title: title,
                  },
                }}
              >
                <Image
                  className="w-full h-full object-cover scale-90 hover:scale-100 transition-transform duration-300"
                  width={300}
                  height={300}
                  src={image}
                  alt="productImage"
                />
              </Link>
              <div className="absolute bottom-4 right-12 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <span
                  onClick={() =>
                    dispatch(
                      addToCart({
                        _id: _id,
                        brand: brand,
                        category: category,
                        description: description,
                        image: image,
                        isNew: isNew,
                        oldPrice: oldPrice,
                        price: price,
                        title: title,
                        quantity: 1,
                      })
                    )
                  }
                  className="w-10 h-10 flex items-center justify-center text-xl bg-white rounded-full shadow-lg cursor-pointer duration-300 hover:bg-amazon_yellow"
                >
                  <HiShoppingCart />
                </span>
                <span
                  onClick={() =>
                    dispatch(
                      addToFavorite({
                        _id: _id,
                        brand: brand,
                        category: category,
                        description: description,
                        image: image,
                        isNew: isNew,
                        oldPrice: oldPrice,
                        price: price,
                        title: title,
                        quantity: 1,
                      })
                    )
                  }
                  className="w-10 h-10 flex items-center justify-center text-xl bg-white rounded-full shadow-lg cursor-pointer duration-300 hover:bg-amazon_yellow"
                >
                  <FaHeart />
                </span>
              </div>
              {isNew && (
                <p className="absolute top-0 right-0 text-amazon_blue font-medium text-xs tracking-wide animate-bounce z-10">
                  !save <FormattedPrice amount={oldPrice - price} />
                </p>
              )}
            </div>
            <hr />
            <div className="px-4 py-3 flex flex-col gap-1">
              <p className="text-xs text-gray-500 tracking-wide">{category}</p>
              <p className="text-base font-medium">{title}</p>
              <p className="flex items-center gap-2">
                <span className="text-sm line-through">
                  <FormattedPrice amount={oldPrice} />
                </span>
                <span className="text-amazon_blue font-semibold">
                  <FormattedPrice amount={price} />
                </span>
              </p>
              <p className="text-xs text-gray-600 text-justify">
                {description.substring(0, 120)}
              </p>
              <button
                onClick={() =>
                  dispatch(
                    addToCart({
                      _id: _id,
                      brand: brand,
                      category: category,
                      description: description,
                      image: image,
                      isNew: isNew,
                      oldPrice: oldPrice,
                      price: price,
                      title: title,
                      quantity: 1,
                    })
                  )
                }
                className="h-10 font-medium bg-amazon_blue text-white rounded-md hover:bg-amazon_yellow hover:text-black duration-300 mt-2"
              >
                Add to cart
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Products;
