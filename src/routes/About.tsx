import { NavLink, Outlet } from "react-router-dom";

function About() {
  return (
    <div>
      <nav>
        <ul className="grid grid-cols-6  text-center bg-[#A1A1AA] my-2 p-1 h-[35px] rounded-md font-medium">
          <li className="col-span-2 px-4 md:px-2 relative">
            <NavLink
              to="/about"
              end
              className={({ isActive }) =>
                [
                  isActive ? "bg-black text-white" : "",
                  "absolute inset-0 rounded-md transition-colors duration-200",
                ].join(" ")
              }
            >
              About
            </NavLink>
          </li>
          <li className="col-span-2 px-4 md:px-2 relative ">
            <NavLink
              to="/about/work-history"
              end
              className={({ isActive }) =>
                [
                  isActive ? "bg-black text-white" : "",
                  "absolute inset-0 rounded-md transition-colors duration-200",
                ].join(" ")
              }
            >
              Work History
            </NavLink>
          </li>
          <li className="col-span-2 relative">
            <NavLink
              to="/about/education"
              end
              className={({ isActive }) =>
                [
                  isActive ? "bg-black text-white" : "",
                  "absolute inset-0 rounded-md transition-colors duration-200",
                ].join(" ")
              }
            >
              Education
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default About;
