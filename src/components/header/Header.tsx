"use client";
import Image from 'next/image';
import logo from '../../images/logo.png';
import cartIcon from '../../images/cartIcon.png';
import { BiCaretDown } from 'react-icons/bi';
import { HiOutlineSearch } from 'react-icons/hi';
import { SlLocationPin } from 'react-icons/sl';
import { FiAlignJustify } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineExpandMore } from "react-icons/md";

import { IoPersonOutline } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { StateProps, StoreProduct } from '../../../type';
import { useEffect, useState } from 'react';
import SearchProducts from '../SearchProducts';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [allData, setAllData] = useState([]);
  const { productData, favoriteData, userInfo, allProducts } = useSelector(
    (state: StateProps) => state.next
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setAllData(allProducts.allProducts);
  }, [allProducts]);

  // Search area
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const filtered = allData.filter((item: StoreProduct) =>
      item.title.toLocaleLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery]);

  return (
    <div className="w-full h-30 md:h-20 bg-amazon_blue text-lightText sticky top-0 z-50">
      <div className="h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-4">
        <div className="flex justify-center items-center">
          <FiAlignJustify className='md:hidden text-white text-2xl cursor-pointer ' onClick={() => setIsMobileMenuOpen(true)} />
          <Link
            href={"/"}
            className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[70%]"
          >
            <Image className="w-28 object-cover mt-1" src={logo} alt="logoImg" />
          </Link>
        </div>

        {isMobileMenuOpen && (
          <div
            className={`fixed inset-0 bg-gray-700 bg-opacity-75 z-10 transition-transform transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
          >
            <div className="absolute top-0 left-0 w-4/5 max-w-sm h-screen bg-white shadow-lg z-20 overflow-y-auto">
              <div className="p-4">
                <div className="flex justify-between items-center mb-4 border-b pb-2">
                  <h1 className="text-lg font-bold">Browse Amazon</h1>
                  <RxCross2 className="text-2xl cursor-pointer" onClick={() => setIsMobileMenuOpen(false)} />
                </div>

                <a href="#" className="flex items-center text-blue-500 mb-4">
                  <IoPersonOutline className="text-xl mr-2" />
                  <span>Sign in</span>
                </a>

                <a href="#" className="flex items-center text-lg font-semibold mb-4">
                  Amazon Home <GoHome className="ml-2" />
                </a>

                <div className="mb-4">
                  <h1 className="text-lg font-semibold">Trending</h1>
                  <a href="#" className="text-blue-500">Movers & Shakers</a>
                </div>

                <div>
                  <h1 className="text-lg font-semibold mb-2">Top Departments</h1>
                  <ul className="pl-4">
                    <li><a href="#" className="text-blue-500">Home</a></li>
                    <li><a href="#" className="text-blue-500">Health & Household</a></li>
                    <li><a href="#" className="text-blue-500">Books</a></li>
                    <li><a href="#" className="text-blue-500">PC</a></li>
                    <li className="flex items-center text-blue-500">
                      See all <MdOutlineExpandMore className="ml-1" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="hidden xl:flex px-2 border border-transparent hover:border-white cursor-pointer duration-300 items-center justify-center h-[70%]">
          <SlLocationPin />
          <div className="text-xs">
            <p>Deliver to</p>
            <p className="text-white font-bold uppercase">Pak</p>
          </div>
        </div>

        <div className='hidden md:flex flex-grow relative m-2 sm:mx-2 w-full sm:w-0'>
          <div className='w-12 sm:mx-0'>
            <select className='absolute left-12 top-0 bottom-0 bg-gray-100 hover:bg-gray-200 w-12 rounded-l-sm active:outline-none active:none'>
              <option>All</option>
              <option>Books</option>
              <option>Electronics</option>
              <option>Home</option>
              <option>Health & Household</option>
              <option>PC</option>
            </select>
          </div>
          <input
            onChange={handleSearch}
            value={searchQuery}
            className="w-full h-10 rounded-md px-4 pl-14 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent"
            type="text"
            placeholder="Search Amazon"
          />
          <span className="w-12 h-full bg-amazon_yellow text-black text-2xl flex items-center justify-center absolute right-0 rounded-tr-md rounded-br-md">
            <HiOutlineSearch />
          </span>

          {searchQuery && (
            <div className="absolute left-0 top-12 w-full mx-auto max-h-96 bg-gray-200 rounded-lg overflow-y-scroll cursor-pointer text-black">
              {filteredProducts.length > 0 ? (
                <>
                  {searchQuery &&
                    filteredProducts.map((item: StoreProduct) => (
                      <Link
                        key={item._id}
                        className="w-full border-b-[1px] border-b-gray-400 flex items-center gap-4"
                        href={{
                          pathname: `${item._id}`,
                          query: {
                            _id: item._id,
                            brand: item.brand,
                            category: item.category,
                            description: item.description,
                            image: item.image,
                            isNew: item.isNew,
                            oldPrice: item.oldPrice,
                            price: item.price,
                            title: item.title,
                          },
                        }}
                        onClick={() => setSearchQuery("")}
                      >
                        <SearchProducts item={item} />
                      </Link>
                    ))}
                </>
              ) : (
                <div className="bg-gray-50 flex items-center justify-center py-10 rounded-lg shadow-lg">
                  <p className="text-xl font-semibold animate-bounce">
                    Nothing matches your search keywords. Please try again!
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        <div className='hidden sm:flex items-center py-2 px-1 border-2 border-transparent hover:border-white'>
          <select className='bg-transparent w-16 h-8 text-white rounded-l-sm outline-none'>
            <option>Pak </option>
            <option>Us </option>
          </select>
        </div>
        <div className="hidden md:flex text-xs text-gray-100 flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%]">
          <p>Hello, sign in</p>
          <p className="text-white font-bold flex items-center">
            Account & Lists{" "}
            <span>
              <BiCaretDown />
            </span>
          </p>
        </div>
        <Link
          href={"/favorite"}
          className="hidden md:flex text-xs text-gray-100 flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative"
        >
          <p>Returns</p>
          <p className="text-white font-bold">& Orders</p>
          {favoriteData.length > 0 && (
            <span className="absolute right-2 top-2 w-4 h-4 border-[1px] border-gray-400 flex items-center justify-center text-xs text-amazon_yellow">
              {favoriteData.length}
            </span>
          )}
        </Link>
        <Link
          href={"/cart"}
          className=" flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative"
        >
          <Image
            className="w-auto object-cover h-8"
            src={cartIcon}
            alt="cartImg"
          />
          <p className="text-xs text-white font-bold mt-3">Cart</p>
          <span className="absolute text-amazon_yellow text-sm top-2 left-[29px] font-semibold">
            {productData ? productData.length : 0}
          </span>
        </Link>
      </div>

      {/* Mobile search bar */}
      <div className="md:hidden w-full p-2">
        <div className="relative flex items-center w-full">
          <select className='absolute left-0 top-0 bottom-0 bg-gray-100 hover:bg-gray-200 w-16 rounded-l-sm active:outline-none active:none'>
            <option>All</option>
            <option>Books</option>
            <option>Electronics</option>
            <option>Home</option>
            <option>Health & Household</option>
            <option>PC</option>
          </select>
          <input
            onChange={handleSearch}
            value={searchQuery}
            className="w-full h-10 rounded-md pl-16 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent"
            type="text"
            placeholder="Search Amazon"
          />
          <span className="w-12 h-full bg-amazon_yellow text-black text-2xl flex items-center justify-center absolute right-0 rounded-tr-md rounded-br-md">
            <HiOutlineSearch />
          </span>
        </div>

        {searchQuery && (
          <div className="absolute left-0 top-16 w-full mx-auto max-h-96 bg-gray-200 rounded-lg overflow-y-scroll cursor-pointer text-black">
            {filteredProducts.length > 0 ? (
              <>
                {searchQuery &&
                  filteredProducts.map((item: StoreProduct) => (
                    <Link
                      key={item._id}
                      className="w-full border-b-[1px] border-b-gray-400 flex items-center gap-4"
                      href={{
                        pathname: `${item._id}`,
                        query: {
                          _id: item._id,
                          brand: item.brand,
                          category: item.category,
                          description: item.description,
                          image: item.image,
                          isNew: item.isNew,
                          oldPrice: item.oldPrice,
                          price: item.price,
                          title: item.title,
                        },
                      }}
                      onClick={() => setSearchQuery("")}
                    >
                      <SearchProducts item={item} />
                    </Link>
                  ))}
              </>
            ) : (
              <div className="bg-gray-50 flex items-center justify-center py-10 rounded-lg shadow-lg">
                <p className="text-xl font-semibold animate-bounce">
                  Nothing matches your search keywords. Please try again!
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
