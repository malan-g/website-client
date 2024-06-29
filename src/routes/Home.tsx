import { Link } from "react-router-dom";

function Home() {
  return (
    <nav className="grid grid-cols-4 grid-rows-4 gap-[10px] list-none h-[400px]">
      <li className="col-start-1 col-span-4 md:col-span-2 row-start-1 md:row-span-2">
        <Link to="/about">
          <div className="bg-green-400 h-full w-full flex flex-col justify-end p-4">
            <h1 className="text-[30px] font-medium">About</h1>
            <span className="text-[14px]">Learn about me</span>
          </div>
        </Link>
      </li>
      <li className="col-start-1 col-span-4 row-span-1 md:col-span-2 row-start-3 md:row-span-2">
        <Link to="/contact">
          <div className="bg-yellow-400 h-full w-full flex flex-col justify-end p-4">
            <h1 className="text-[30px]">Contact</h1>
            <span className="text-[14px]">Get in touch</span>
          </div>
        </Link>
      </li>
      <li className="col-start-1 md:col-start-3 col-span-4 md:col-span-2 md:row-start-1 md:row-span-4">
        <Link to="/projects">
          <div className="bg-blue-400 h-full w-full flex flex-col justify-end p-4">
            <h1 className="text-[30px]">Projects</h1>
            <span className="text-[14px]">Digital Portfolio</span>
          </div>
        </Link>
      </li>
    </nav>
  );
}

export default Home;
