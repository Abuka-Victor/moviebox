import logo from '../assets/tv.png';
import { MagnifyingGlassIcon, Bars2Icon } from '@heroicons/react/24/solid';

const Navbar = () => {
  return (
    <div className="flex w-11/12 justify-between mx-auto items-center absolute top-4 sm:left-14 left-4 text-white z-10">
      <div className="flex items-center gap-2">
        <img src={logo} alt="" className="w-[50px] h-[50px]" />
        <h2 className="font-medium text-2xl">MovieBox</h2>
      </div>

      <form
        action=""
        className="sm:flex border border-solid border-white w-1/3 px-2 py-1 rounded-md hidden"
      >
        <div className="flex flex-1 justify-between items-center w-full">
          <input
            type="search"
            name=""
            id=""
            placeholder="What do you want to watch?"
            className="flex-1 bg-transparent outline-none text-white"
          />
          <MagnifyingGlassIcon
            className="w-6 h-6 cursor-pointer"
            color="#fff"
          />
        </div>
      </form>

      <div className="flex gap-6 items-center">
        <p className="hover:underline cursor-pointer hidden sm:block">
          Sign In
        </p>
        <div className="bg-[#BE123C] rounded-full p-2 cursor-pointer">
          <Bars2Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
