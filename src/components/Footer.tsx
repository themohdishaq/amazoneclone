import Image from "next/image";
import logo from "../images/logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    
      <footer className="bg-[#232F3E]">
        <div className="bg-[#37475A] h-12 flex justify-center items-center text-white text-sm">
            <p> <Link href="#home"> Back to top </Link></p>
        </div>

        <div className="bg-[#232F3E] w-full h-auto text-[#DDDDDD] text-sm grid md:grid-cols-4 sm:grid-cols-2 gap-8 p-10">
            <ul className="space-y-2.5">
                <li className="font-bold text-base text-white">Get to Know Us</li>
                <li className="hover:text-gray-400 cursor-pointer">Careers</li>
                <li className="hover:text-gray-400 cursor-pointer">Blog</li>
                <li className="hover:text-gray-400 cursor-pointer">About Amazon</li>
                <li className="hover:text-gray-400 cursor-pointer">Investor Relations</li>
                <li className="hover:text-gray-400 cursor-pointer">Amazon Devices</li>
                <li className="hover:text-gray-400 cursor-pointer">Amazon Science</li>
            </ul>
            <ul className="space-y-2.5">
                <li className="text-base font-bold text-white">Make Money with Us</li>
                <li className="hover:text-gray-400 cursor-pointer">Sell products on Amazon</li>
                <li className="hover:text-gray-400 cursor-pointer">Sell on Amazon Business</li>
                <li className="hover:text-gray-400 cursor-pointer">Sell apps on Amazon</li>
                <li className="hover:text-gray-400 cursor-pointer">Become an Affiliate</li>
                <li className="hover:text-gray-400 cursor-pointer">Advertise Your Products</li>
                <li className="hover:text-gray-400 cursor-pointer">Self-Publish with Us</li>
                <li className="hover:text-gray-400 cursor-pointer">Host an Amazon Hub</li>
                <li className="hover:text-gray-400 cursor-pointer">See More Make Money with Us</li>
            </ul>

            <ul className="space-y-2.5">
                <li className="text-base font-bold text-white">Amazon Payment Products</li>
                <li className="hover:text-gray-400 cursor-pointer">Amazon Business Card</li>
                <li className="hover:text-gray-400 cursor-pointer">Shop with Points</li>
                <li className="hover:text-gray-400 cursor-pointer">Reload Your Balance</li>
                <li className="hover:text-gray-400 cursor-pointer">Amazon Currency Converter</li>
            </ul>

            <ul className="space-y-2.5">
                <li className="text-base font-bold text-white">Let Us Help You</li>
                <li className="hover:text-gray-400 cursor-pointer">Amazon and COVID-19</li>
                <li className="hover:text-gray-400 cursor-pointer">Your Account</li>
                <li className="hover:text-gray-400 cursor-pointer">Your Orders</li>
                <li className="hover:text-gray-400 cursor-pointer">Shipping Rates & Policies</li>
                <li className="hover:text-gray-400 cursor-pointer">Returns & Replacements</li>
                <li className="hover:text-gray-400 cursor-pointer">Manage Your Content and Devices</li>
                <li className="hover:text-gray-400 cursor-pointer">Amazon Assistant</li>
                <li className="hover:text-gray-400 cursor-pointer">Help</li>
            </ul>
        </div>
        <hr/>
         <div className="w-full h-20 bg-amazon_light text-gray-300 flex items-center justify-center gap-4">
         <Image className="w-24" src={logo} alt="logo" />
      <p className="text-sm -mt-4">
        All rights reserved{" "}
        <a
          className="hover:text-white hover:underline decoration-[1px] cursor-pointer duration-300"
          href="https://reactbd.com"
          target="_blank"
        >
          @amazon.com
        </a>
      </p>
   
        </div>
        </footer> 


  );
};

export default Footer;
