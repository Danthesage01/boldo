import Container from "../Container";
import { faqData, lastServiceData, serviceData } from "../../utils/utils";
import FadeIn from "../FadeIn";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import male from "../../assets/images/services/male.svg";
import female from "../../assets/images/services/female.svg";
import pie from "../../assets/images/services/pie.svg";
import bar from "../../assets/images/services/bar.svg";
import check from "../../assets/images/services/check.svg";
import sun from "../../assets/images/services/sun.svg";
import eye from "../../assets/images/services/eye.svg";
import feather from "../../assets/images/services/feather.svg";
import faq from "../../assets/images/services/faq.svg";
import caretDown from "../../assets/images/services/caret-down.svg";
import { useRef, useState } from "react";
const OurServices = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -350,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 350,
        behavior: "smooth",
      });
    }
  };

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mb-10">
      <div className=" bg-darkBlue pt-14 md:pb-4">
        <FadeIn>
          <Container>
            <div className="px-12 w-full">
              <div className="mb-4 flex flex-col items-center justify-center">
                <p className="font-paragraph text-center text-white text-xs-16 md:text-s-20">
                  Our Services
                </p>
                <p className="font-heading  text-l-28 lg:text-xl-36 text-center lg:w-[800px] text-white">
                  Handshake infographic mass market crowdfunding iteration.
                </p>
              </div>
              <div className="mt-8 flex w-full flex-wrap items-stretch justify-center gap-8 lg:gap-24">
                {serviceData.map((blog) => (
                  <div
                    key={blog.id}
                    className="w-[300px]  flex flex-col "
                  >
                    <img
                      src={blog.image}
                      alt={blog.title}
                    />
                    <div className=" font-paragraph text-white mt-4 mb-2">
                      {blog.title}
                    </div>
                    <div className="flex w-[130px] border-b mb-8 items-center font-paragraph text-white py-2 gap-2 hover:opacity-80 cursor-pointer">
                      <p className="font-bold">Explore Page</p>
                      <FaArrowRight />
                    </div>{" "}
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </FadeIn>
      </div>
      {/* Service offerings */}

      <div className=" bg-white pt-14 md:pb-4">
        <FadeIn>
          <Container>
            <div className="md:px-12  w-full">
              <div className="my-8 md:mb-24  flex w-full flex-wrap items-center justify-center gap-8 lg:gap-24">
                <div className="relative ">
                  <div>
                    <img
                      src={male}
                      alt="male pix"
                    />
                  </div>
                  <div className="bg-white -bottom-24 right-10 rounded-lg absolute p-6 pb-2   w-[251px] md:h-[388px]">
                    <img
                      src={bar}
                      alt="bar pix"
                    />
                    <p className="text-darkBlue font-bold font-heading pt-4">
                      30%
                    </p>
                    <p className="text-darkBlue font-heading pt-2 text-[12px]">
                      More income in June
                    </p>
                  </div>
                </div>
                <div className="w-[500px] mt-28 md:mt-20">
                  <p className="px-1 text-xl-36 font-heading">
                    We connect our customers with the best, and help them keep
                    up-and stay open.
                  </p>
                  <div className="flex  items-center font-paragraph py-4 gap-4">
                    <img
                      src={check}
                      alt="check"
                    />

                    <p className="font-bold">
                      We connect our customers with the best.
                    </p>
                  </div>{" "}
                  <div className="flex  items-center font-paragraph py-4 gap-4">
                    <img
                      src={check}
                      alt="check"
                    />

                    <p className="font-bold">
                      Advisor success customer launch party.
                    </p>
                  </div>{" "}
                  <div className="flex  items-center font-paragraph py-4 gap-4">
                    <img
                      src={check}
                      alt="check"
                    />

                    <p className="font-bold">Business-to-consumer long tail.</p>
                  </div>{" "}
                  <button
                    type="button"
                    className="text-white mt-6  border text-b  bg-darkBlue border-darkBlue px-12 py-3 text-center  hover:border-opacity-90  font-medium hover:bg-opacity-90 rounded-full"
                  >
                    Start Now
                  </button>
                </div>
              </div>
              <div className="my-8  md:my-40 flex w-full flex-wrap items-center justify-center gap-8  lg:gap-24">
                <div className="w-[500px]  mt-12">
                  <p className="px-1 text-xl-36 font-heading">
                    We connect our customers with the best, and help them keep
                    up-and stay open.
                  </p>
                  <div className="flex bg-darkBlue mt-8 px-4 hover:opacity-80 rounded-md items-center font-paragraph py-4 gap-4">
                    <img
                      src={feather}
                      alt="feather"
                    />

                    <p className="font-bold text-white">
                      We connect our customers with the best.
                    </p>
                  </div>{" "}
                  <div className="flex bg-white shadow-md hover:opacity-80 mt-8 px-4  items-center font-paragraph py-4 gap-4">
                    <img
                      src={eye}
                      alt="eye"
                    />

                    <p className="font-bold">
                      Advisor success customer launch party.
                    </p>
                  </div>{" "}
                  <div className="flex bg-white shadow-md  mt-8 px-4  items-center hover:opacity-80 font-paragraph py-4 gap-4">
                    <img
                      src={sun}
                      alt="sun"
                    />

                    <p className="font-bold">Business-to-consumer long tail.</p>
                  </div>{" "}
                </div>
                <div className="w-[500px] relative  mb-40 md:mb-0">
                  <div className="w-full">
                    <img
                      src={female}
                      alt="female pix"
                      className=""
                    />
                  </div>
                  <div className="bg-white -bottom-28 left-14 rounded-lg absolute p-6 pb-2   w-[251px] md:h-[388px]">
                    <img
                      src={pie}
                      alt="bar pix"
                    />
                    <div className="flex items-center gap-2 pt-4">
                      <div className="bg-lightBlue  h-1 w-1 rounded-full "></div>{" "}
                      <p className="text-[12px]"> 35% - Agile Development</p>
                    </div>
                    <div className="flex items-center gap-2 pt-4">
                      <div className="bg-green  h-1 w-1 rounded-full "></div>{" "}
                      <p className="text-[12px]">30% - Investors bandwidth</p>
                    </div>{" "}
                    <div className="flex items-center gap-2 pt-4">
                      <div className="bg-black  h-1 w-1 rounded-full "></div>{" "}
                      <p className="text-[12px]">35% - A/B testing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </FadeIn>
      </div>
      {/* Testimonials */}
      <div className="bg-darkBlue pt-14 pb-14 md:pb-4">
        <FadeIn>
          <Container>
            <div className="px-2 md:px-12 w-full">
              <div className="mb-4 flex flex-wrap items-end justify-center gap-8 lg:gap-24">
                <p className="font-heading text-l-28 lg:text-xl-36 text-left lg:w-[800px] lg:pr-60 text-white">
                  An enterprise template to ramp up your company website
                </p>
                <div className="ml-10 flex gap-4 items-center">
                  <button
                    onClick={scrollLeft}
                    className="bg-white p-5 rounded-full focus:outline-none"
                  >
                    <FaArrowLeft size={24} />
                  </button>
                  <button
                    onClick={scrollRight}
                    className="bg-white p-5 rounded-full focus:outline-none"
                  >
                    <FaArrowRight size={24} />
                  </button>
                </div>
              </div>

              <div
                ref={scrollRef}
                className="mt-8 flex w-full md:justify-center flex-nowrap overflow-x-scroll gap-8 scrollbar-hide"
              >
                {lastServiceData.map((blog) => (
                  <div
                    key={blog.id}
                    className="min-w-[300px] max-w-[350px] flex-shrink-0"
                  >
                    <div className="rounded-xl p-10 bg-white">
                      <div className="text-m-24 font-paragraph text-darkBlue">
                        {blog.text}
                      </div>
                      <div className="flex mt-10 items-center gap-4">
                        <img
                          src={blog.authorImg}
                          alt={blog.authorName}
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <p className="font-paragraph text-darkBlue font-bold">
                            {blog.authorName}
                          </p>
                          <p className="font-paragraph text-darkGrey text-[12px]">
                            {blog.authorTitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </FadeIn>
      </div>
      {/* FAQs*/}
      <div className=" bg-white pt-14 md:pb-4">
        <FadeIn>
          <Container>
            <div className="md:my-8 w-full ">
              <img
                src={faq}
                alt="male pix"
                className="w-full h-full"
              />
              <div className="my-8 flex w-full flex-wrap items-center justify-between gap-8  ">
                <div className=" my-4 md:mt-12">
                  <p className="px-1 text-xl-36 font-heading  md:w-[500px]">
                    We connect our customers with the best, and help them keep
                    up-and stay open.
                  </p>
                </div>
                <div className="w-full md:w-[45%]">
                  <div className="w-full">
                    {faqData.map((faq, index) => (
                      <div
                        key={faq.id}
                        className="border-b mb-4"
                      >
                        <div
                          onClick={() => toggleAccordion(index)}
                          className="flex items-center justify-between font-paragraph py-4 cursor-pointer gap-4"
                        >
                          <p className="font-bold">{faq.question}</p>
                          <img
                            src={caretDown}
                            alt="Toggle"
                            className={`transition-transform duration-300 ${
                              activeIndex === index ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                        {activeIndex === index && (
                          <div className="  pb-4 text-xs-16 text-darkGrey">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </FadeIn>
      </div>
    </div>
  );
};

export default OurServices;
