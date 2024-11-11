import { Link } from "react-router-dom";
import Boldo from "../assets/images/Logo.svg";
import Container from "./Container";
import FadeIn from "./FadeIn";
const Footer = () => {
  return (
    <div className=" bg-white py-14">
      <FadeIn>
        <Container>
          <div className="font-paragraph flex gap-9 flex-wrap justify-between ">
            <div>
              <span>
                <img
                  src={Boldo}
                  alt="boldo"
                />
              </span>

              <div className="mt-6">
                <p className=" font-light text-darkGrey text-sm sm:w-[340px] w-full">
                  Social media validation business model canvas graphical user
                  interface launch party creative facebook iPad twitter.
                </p>
              </div>

              <p className=" font-light text-darkGrey pt-8 text-[14px]">
                All right reserved
              </p>
            </div>

            <div id="socials">
              <p className="font-semibold text-base mb-5">Landings</p>

              <div className="flex justify-start items-center">
                <ul className="flex text-darkGrey flex-col gap-7">
                  <Link to="/">Home</Link>

                  <Link to="/products">Products</Link>

                  <Link to="/services">Services</Link>
                </ul>
              </div>
            </div>
            <div id="resources">
              <p className="font-semibold text-base mb-5">Company</p>

              <div className="flex justify-start items-center">
                <ul className="flex text-darkGrey flex-col gap-7">
                  <Link to="/">Home</Link>

                  <Link to="careers">
                    Careers{" "}
                    <span className="bg-green text-black text-[10px] ml-1 py-1 px-2 rounded-full">
                      Hiring!
                    </span>
                  </Link>

                  <Link to="/services">Services</Link>
                </ul>
              </div>
            </div>
            <div id="resources">
              <p className="font-semibold text-base mb-5">Resources</p>

              <div className="flex justify-start items-center">
                <ul className="flex text-darkGrey flex-col gap-7">
                  <Link to="/blogs">Blog</Link>

                  <Link to="/products">Products</Link>

                  <Link to="/services">Services</Link>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </FadeIn>
    </div>
  );
};

export default Footer;
