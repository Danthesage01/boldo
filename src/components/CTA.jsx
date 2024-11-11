import { Link } from "react-router-dom";
import Container from "./Container";
import FadeIn from "./FadeIn";
const CTA = () => {
  return (
    <div className=" bg-white pt-14 md:pb-4">
      <FadeIn>
        <Container>
          <div className="bg-darkBlue w-full h-auto lg:h-[391px] rounded-lg  ">
            <div className="ctaRightBg h-full rounded-lg flex flex-col justify-center items-center p-4 lg:p-8">
              <div className="w-[100%] md:w-[600px]">
                <p className="font-heading text-l-28 lg:text-xl-36 text-center lg:px-8 text-white">
                  An enterprise template to ramp up your company website
                </p>

                <div className="mt-12 mb-14 w-full flex flex-col md:flex-row md:justify-start justify-center items-center gap-2 lg:gap-6">
                  <input
                    type="text"
                    placeholder="Your email address"
                    className="bg-white  border text-b  text-black  px-4 w-full md:w-[350px]  py-3   rounded-full"
                  />

                  <button
                    type="button"
                    className="text-darkBlue  border text-b  bg-green  px-12 py-3 text-center  hover:border-opacity-90  font-medium hover:bg-opacity-90 rounded-full"
                  >
                    Start Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </FadeIn>
    </div>
  );
};

export default CTA;
