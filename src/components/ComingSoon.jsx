import { Link } from "react-router-dom";
import comingSoon from "../assets/images/global/coming-soon.png";
import FadeIn from "./FadeIn";

function ComingSoon({ page }) {
  return (
    <div className="bg-lightBlue bg-opacity-30">
      <FadeIn>
        <div className=" flex flex-col justify-center items-center gap-4 h-screen w-screen">
          <h1 className="text-xxl-48 md:text-xxxl-64 font-heading capitalize ">
            {page}
          </h1>
          <div className="rounder-lg h-[250px]">
            <img
              src={comingSoon}
              alt="resume loading"
              className="h-full"
              width={"100%"}
            />
          </div>
          <div className="mt-5 text-xxl-48 md:text-xxxl-64">
            <Link
              to="/"
              className="underline underline-offset-8"
            >
              Go Back Home
            </Link>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

export default ComingSoon;
