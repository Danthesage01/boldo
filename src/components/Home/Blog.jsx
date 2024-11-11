import Container from "../Container";
import { blogData } from "../../utils/utils";
import FadeIn from "../FadeIn";
const Blog = () => {
  return (
    <div className=" bg-white pt-14 md:pb-4">
      <FadeIn>
        <Container>
          <div className="px-12 w-full">
            <div className="mb-4 flex flex-col items-center justify-center">
              <p className="font-paragraph text-center text-darkGrey text-xs-16 md:text-s-20">
                Our Blog
              </p>
              <p className="font-heading  text-l-28 lg:text-xl-36 text-center lg:w-[800px] text-black">
                Value proposition accelerator product management venture
              </p>
            </div>
            <div className="mt-8 flex w-full flex-wrap items-stretch justify-center gap-8 lg:gap-12">
              {blogData.map((blog) => (
                <div
                  key={blog.id}
                  className="w-[300px] lg:h-[424px] flex flex-col "
                >
                  <img
                    src={blog.image}
                    alt={blog.text}
                  />
                  <div className="flex gap-4 items-center my-2">
                    <span className="font-paragraph capitalize text-[12px]text-darkBlue font-bold">
                      {blog.category}
                    </span>
                    <span className="font-paragraph text-[12px] text-darkGrey font-bold">
                      {blog.date}
                    </span>
                  </div>
                  <div className="min-h-[100px] font-paragraph text-darkBlue">
                    {blog.text}
                  </div>
                  <div className="flex items-center gap-4">
                    <img
                      src={blog.authorImg}
                      alt={blog.authorName}
                    />
                    <span className="font-paragraph text-darkBlue">
                      {blog.authorName}
                    </span>
                  </div>{" "}
                </div>
              ))}
            </div>
            <div className="my-8 flex flex-col items-center justify-center">
              <button
                type="button"
                className="text-darkBlue  border text-b  bg-white border-darkBlue px-12 py-3 text-center  hover:border-opacity-90  font-medium hover:bg-opacity-90 rounded-full"
              >
                Load More
              </button>
            </div>
          </div>
        </Container>
      </FadeIn>
    </div>
  );
};

export default Blog;
