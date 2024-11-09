import { Link } from "react-router-dom";
import FadeIn from "../FadeIn";
import HeroGraphics from "../../assets/images/hero/HeroGraphics.svg";
import Container from "../Container";
import InfiniteScroll from "../InfiniteScroll";
const Hero = () => {
  return (
    <div className="w-full  hero_box_bg ">
      <div className="w-full md:pb-0 pb-20  hero_box_bg  heroRightBg ">
        <Container>
          <div className="flex flex-col lg:flex-row justify-between items-center pt-28 lg:py-28 ">
            <FadeIn>
              <div className=" items-baseline flex flex-col gap-1 lg:gap-4 lg:pt-12">
                <h2 className="text-xxl-48 font-bold font-heading text-[#000000] w-[95%] lg:w-[601px] lg:text-left text-center">
                  Save time by building fast with Boldo Template
                </h2>

                <p className="text-[#777777] font-paragraph text-xs-16 lg:w-[601px] lg:text-left text-center">
                  Funding handshake buyer business-to-business metrics iPad
                  partnership. First mover advantage innovator success
                  deployment non-disclosure.
                </p>

                <div className="mt-12 mb-14 w-full flex lg:justify-start justify-center items-center gap-2 lg:gap-6">
                  <Link
                    to="/"
                    className="text-white  border text-b  bg-darkBlue border-darkBlue px-6 lg:px-12 py-3 text-center  hover:border-opacity-90  font-medium hover:bg-opacity-90 rounded-full"
                  >
                    Buy Template
                  </Link>
                  <Link
                    to="/"
                    className="text-darkBlue  border text-b  bg-white border-darkBlue px-12 py-3 text-center  hover:border-opacity-90  font-medium hover:bg-opacity-90 rounded-full"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="w-full lg:h-[500px] bg-red-50  lg:justify-end lg:flex">
                <img
                  src={HeroGraphics}
                  alt="resume loading"
                  className="h-full  "
                />
              </div>
            </FadeIn>
          </div>
        </Container>
        <InfiniteScroll />
      </div>
    </div>
  );
};

export default Hero;
