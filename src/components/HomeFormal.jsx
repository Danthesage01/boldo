// import Hero from "./Hero";
// import AIResumes from "./AIResumes";
// import BeyondResumes from "./BeyondResumes";
// import JoinCommunity from "./JoinCommunity";
// import GetInTouch from "./GetInTouch";

const HomeFormal = () => {
  return (
    <div>
      {" "}
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 gap-4 p-6">
        <div className="col-span-1 md:col-span-4 row-span-2">Hero</div>
        <div className="col-span-1 md:col-span-2 row-span-2 bg-green-500">
          Sidebar
        </div>
        <div className="col-span-1 md:col-span-2 bg-red-500">
          Main Content 1
        </div>
        <div className="col-span-1 md:col-span-2 bg-yellow-500">
          Main Content 2
        </div>
        <div className="col-span-1 md:col-span-4 bg-purple-500">Footer</div>
      </div>
    </div>
  );
};

export default HomeFormal;
