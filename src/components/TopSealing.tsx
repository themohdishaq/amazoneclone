import Image from "next/image";
import headsets from "../images/hero/headset.jpg";
import keyboard from "../images/hero/keyboard.jpg";
import mouse from "../images/hero/mouse.jpg";
import chair from "../images/hero/chairs.jpg";
import dining from "../images/hero/refresh.jpg";
import home from "../images/hero/home.jpg";
import health from "../images/hero/healthandbeauty.jpg";
import kitchen from "../images/hero/kitchen.jpg";
import computer from "../images/hero/dealsinpc.jpg";
import jeans from "../images/hero/jeans.jpg";
import shoes from "../images/hero/shoes.jpg";
import dress from "../images/hero/dresses.jpg";
import shirts from "../images/hero/shirts.jpg";

const TopSealing = () => {
  return (
    <div className="w-full relative md:my-28 md:py-10 ">
      <div className="md:absolute h-auto md:-bottom-20 w-full px-5 grid  md:grid-cols-4 items-center  gap-6 ">
        <div className="bg-white p-5 w-full  h-auto">
          <h1 className="text-2xl md:text-xl font-bold text-black">Gaming accessories</h1>
          <div className="grid grid-cols-2 gap-2 mt-3">
            <div className="flex flex-col justify-center items-center">
              <Image src={headsets} alt="chair" width={355} height={355} />
              <p>Headsets</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image src={keyboard} alt="chair" width={355} height={355} />
              <p>Keyboards</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image src={mouse} alt="chair" width={355} height={355} />
              <p>Computer mice</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image src={chair} alt="chair" width={355} height={355} />
              <p>Chairs</p>
            </div>
          </div>
          <button className="bg-yellow-400 hover:bg-yellow-500 w-full md:w-auto text-black font-semibold py-2 px-4 rounded mt-2">
            See more
          </button>
        </div>

        <div className="bg-white p-5 w-full  h-auto">
          <h1 className="text-2xl md:text-xl font-bold text-black">Refresh your space</h1>
          <div className="grid grid-cols-2 gap-2 mt-3">
            <div className="flex flex-col justify-center items-start">
              <Image src={dining} alt="chair" width={355} height={355} />
              <p>Dining</p>
            </div>
            <div className="flex flex-col justify-center items-start">
              <Image src={home} alt="chair" width={355} height={355} />
              <p>Home</p>
            </div>
            <div className="flex flex-col justify-center items-start">
              <Image src={kitchen} alt="chair" width={355} height={355} />
              <p>Kitchen</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image src={health} alt="chair" width={355} height={355} />
              <p className="text-sm">Health & Beauty</p>
            </div>
          </div>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black w-full md:w-auto font-semibold py-2 px-4 rounded mt-2">
            See more
          </button>
        </div>

        <div className="bg-white p-5 w-full h-auto">
          <h1 className="text-2xl md:text-xl font-bold">Deals in PC</h1>
          <div className="grid gap-2 mt-3">
            <div className="flex flex-col justify-center items-center">
              <Image src={computer} alt="chair" width={355} height={355} />
            </div>
          </div>
          <button className="bg-yellow-400 hover:bg-yellow-500 w-full md:w-auto text-black font-semibold py-2 px-4 rounded mt-2">
            See more
          </button>
        </div>

        <div className="bg-white p-5 w-full  h-auto">
          <h1 className="text-2xl md:text-xl font-bold text-black">Shop Deals in Fashion</h1>
          <div className="grid grid-cols-2 gap-2 mt-3">
            <div className="flex flex-col justify-center items-start">
              <Image src={jeans} alt="chair" width={355} height={355} />
              <p className="text-sm">Jeans under $30</p>
            </div>
            <div className="flex flex-col justify-center items-start">
              <Image src={shirts} alt="chair" width={355} height={355} />
              <p className="text-sm">Tops under $25</p>
            </div>
            <div className="flex flex-col justify-center items-start">
              <Image src={dress} alt="chair" width={355} height={355} />
              <p className="text-sm">Dress under $30</p>
            </div>
            <div className="flex flex-col justify-center items-start">
              <Image src={shoes} alt="chair" width={355} height={355} />
              <p className="text-sm">Shoes under $50</p>
            </div>
          </div>
          <button className="bg-yellow-400 hover:bg-yellow-500 w-full md:w-auto text-black font-semibold py-2 px-4 rounded mt-2">
            See more
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopSealing;
