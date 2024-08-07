import { useState, useEffect, useContext } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { StoreContext } from "../../context/StoreContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [itemCount, setItemCount] = useState(0);

  const { cartItems } = useContext(StoreContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const totalItems = Object.values(cartItems).reduce((sum, count) => sum + count, 0);
    setItemCount(totalItems);
  }, [cartItems]);

  return (
    <nav className={`bg-white ${isScrolled ? "shadow-sm" : "shadow-sm"} fixed top-0 w-full z-50`}>
      <div className="container">
        <div className="flex justify-between items-center h-14">
          <div className="flex-shrink-0">
            <Link to={"/"}>
              <img className="" src="/Frame 3.png" alt="comfy" />
            </Link>
          </div>
          <div className="hidden md:flex space-x-12">
            <Link
              to="/"
              className={`text-gray ${activeLink === "Home" ? "text-[#C19A6B] font-bold" : ""}`}
              onClick={() => handleLinkClick("Home")}
            >
              Home
            </Link>
            <Link
              to="#"
              className={`text-gray ${activeLink === "About" ? "text-[#C19A6B] font-bold" : ""}`}
              onClick={() => handleLinkClick("About")}
            >
              About
            </Link>
            <Link
              to="/shop"
              className={`text-gray ${activeLink === "Shop" ? "text-[#C19A6B] font-bold" : ""}`}
              onClick={() => handleLinkClick("Shop")}
            >
              Shop
            </Link>
            <Link
              to="#"
              className={`text-gray ${activeLink === "Blog" ? "text-[#C19A6B] font-bold" : ""}`}
              onClick={() => handleLinkClick("Blog")}
            >
              Blog
            </Link>
            <Link
              to="#"
              className={`text-gray ${activeLink === "Contact" ? "text-[#C19A6B] font-bold" : ""}`}
              onClick={() => handleLinkClick("Contact")}
            >
              Contact
            </Link>
            <Link
              to="#"
              className={`text-gray ${activeLink === "FAQ" ? "text-[#C19A6B] font-bold" : ""}`}
              onClick={() => handleLinkClick("FAQ")}
            >
              FAQ
            </Link>
          </div>
          <div className="md:hidden flex flex-row-reverse gap-10 items-center justify-center">
            <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-700">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>

            <div className="flex relative cursor-pointer">
              <Link to="/cart-page">
                <BsHandbag />
                <span className="absolute bottom-3 left-3 flex h-4 w-4 items-center justify-center rounded-full bg-[#C19A6B] text-xs text-white">
                  {itemCount}
                </span>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex space-x-4 text-2xl">
            <div className="cursor-pointer">
              <IoSearchOutline />
            </div>
            <div className="border-t sm:border-t-0 sm:border-s border-gray-200 light:border-neutral-700"></div>
            <div className="cursor-pointer">
              <CiHeart />
            </div>
            <div className="border-t sm:border-t-0 sm:border-s border-gray-100 light:border-neutral-800"></div>
            <div className="flex relative cursor-pointer">
              <Link to="/cart-page">
                <BsHandbag />
                <span className="absolute bottom-3 left-3 flex h-4 w-4 items-center justify-center rounded-full bg-[#C19A6B] text-xs text-white">
                  {itemCount}
                </span>
              </Link>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <Link
              to="/"
              className={`block pl-0 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ${activeLink === "Home" ? "text-[#C19A6B]" : ""}`}
              onClick={() => handleLinkClick("Home")}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block pl-0 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ${activeLink === "About" ? "text-[#C19A6B]" : ""}`}
              onClick={() => handleLinkClick("About")}
            >
              About
            </Link>
            <Link
              to="/shop"
              className={`block pl-0 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ${activeLink === "Shop" ? "text-[#C19A6B]" : ""}`}
              onClick={() => handleLinkClick("Shop")}
            >
              Shop
            </Link>
            <Link
              to="/blog"
              className={`block pl-0 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ${activeLink === "Blog" ? "text-[#C19A6B]" : ""}`}
              onClick={() => handleLinkClick("Blog")}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className={`block pl-0 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ${activeLink === "Contact" ? "text-[#C19A6B]" : ""}`}
              onClick={() => handleLinkClick("Contact")}
            >
              Contact
            </Link>
            <Link
              to="/faq"
              className={`block pl-0 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ${activeLink === "FAQ" ? "text-[#C19A6B]" : ""}`}
              onClick={() => handleLinkClick("FAQ")}
            >
              FAQ
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
