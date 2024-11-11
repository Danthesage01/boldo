import BlueLogo from "../assets/images/Logo.svg";
import WhiteLogo from "../assets/images/white-logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Container from "./Container";

const Navbar = ({ logout, userData, toggleOpen }) => {
  const navigate = useNavigate();
  const [navBackground, setNavBackground] = useState(
    "md:bg-transparent bg-white"
  );
  const [logo, setLogo] = useState(BlueLogo);
  const [textColor, setTextColor] = useState("text-darkColor");
  const [navHeight, setNavHeight] = useState("md:h-[136px] h-auto");
  const location = useLocation();
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 767) {
        if (window.scrollY > 50) {
          setNavBackground("bg-darkBlue");
          setTextColor("text-white");
          setNavHeight("h-[120px]");
          setLogo(WhiteLogo);
        } else {
          setNavBackground(
            location.pathname === "/"
              ? "md:bg-transparent bg-white"
              : "bg-[#011613]"
          );
          setTextColor(
            location.pathname === "/" ? "text-darkColor" : "text-white"
          );
          setNavHeight("md:h-[100px] h-auto");
          setLogo(BlueLogo);
        }
      } else {
        setNavHeight("h-auto");
      }
    };

    if (location.pathname !== "/") {
      setNavBackground("bg-[#011613]");
      setTextColor("text-white");
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  const toggleModal = () => {
    setShowDarkModal(!showDarkModal);
    console.log("return");
  };

  return (
    <nav
      className={`fixed top-0 w-full ${navHeight} z-20 ${navBackground} transition-colors duration-400 ease-in-out`}
    >
      <Container>
        <div
          className={`flex md:flex-row flex-col pt-8 pb-4 md:py-6 justify-between md:items-center items-start ${navHeight} `}
        >
          <div
            id="nav-logo"
            className="h-[30px] hover:opacity-80  "
          >
            <Link
              to="/"
              aria-label="Home"
              className=""
            >
              <img
                src={logo}
                className="w-full h-full"
                alt="logo"
              />
            </Link>
          </div>

          {/* Mobile and Desktop Nav Links */}
          <div
            id="nav-links"
            className={`${
              isClick ? "block" : "hidden"
            } md:block md:w-auto w-full`}
          >
            <ul className="flex md:flex-row flex-col md:space-x-4 space-x-0 md:w-auto w-full md:p-0 py-4">
              <li className="md:mb-0 mb-4 flex_center">
                <div className="md:mr-4 mr-0">
                  <Link
                    to="/products"
                    className={` cursor-pointer ${textColor} font-paragraph font-semibold hover:opacity-80 text-s-20 md:text-xs-16  lg:${
                      window.scrollY > 50 ? "text-white" : "text-darkBlue"
                    }`}
                  >
                    Products
                  </Link>
                </div>
              </li>

              <li className="md:mb-0 mb-4 flex_center">
                <div className="md:mr-4 mr-0">
                  <Link
                    to="/services"
                    className={` cursor-pointer ${textColor} font-paragraph font-semibold hover:opacity-80 text-s-20 md:text-xs-16  lg:${
                      window.scrollY > 50 ? "text-white" : "text-darkBlue"
                    }`}
                  >
                    Services
                  </Link>
                </div>
              </li>

              <li className="md:mb-0 mb-4 flex_center">
                <div className="md:mr-2 mr-0 md:mb-0 mb-3">
                  <Link
                    to="/about"
                    className={` cursor-pointer ${textColor} font-paragraph font-semibold hover:opacity-80 text-s-20 md:text-xs-16  lg:${
                      window.scrollY > 50 ? "text-white" : "text-darkBlue"
                    }`}
                  >
                    About
                  </Link>
                </div>
              </li>

              <li className="md:mb-0 mb-8">
                <div className=" md:w-auto w-full h-fit">
                  <Link
                    to="/login"
                    className={` cursor-pointer ${textColor} font-paragraph border hover:opacity-80 rounded-full text-center px-8 py-1 font-semibold text-s-20 md:text-xs-16  lg:${
                      window.scrollY > 50 ? "text-white" : "text-darkBlue"
                    }`}
                  >
                    Login
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="md:hidden block items-center absolute right-5 top-5">
          <button
            className={`inline-flex items-center justify-center rounded-md text-darkBlue hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white mt-3 `}
            onClick={toggleNavbar}
          >
            {isClick ? (
              <IoMdClose
                size={32}
                color="text-darkBlue"
              />
            ) : (
              <HiMenu
                size={32}
                color="text-darkBlue"
              />
            )}
          </button>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
