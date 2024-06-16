import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="navbar flex justify-between bg-base-content">
      <div className="navbar-start">
        <Link
          to="top"
          smooth={true}
          duration={500}
          className="btn btn-ghost text-xl text-green-500"
        >
          TECH.
        </Link>
      </div>

      {/* menu horizontal */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg text-white">
          <li>
            <Link to="aboutUs" smooth={true} duration={500}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="products" smooth={true} duration={500}>
              Products
            </Link>
          </li>
          <li>
            <Link to="teams" smooth={true} duration={500}>
              Teams
            </Link>
          </li>
        </ul>
      </div>
      {/* menu horizontal */}

      {/* menu dropdown */}
      <div className="dropdown">
        <div tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content menu-xs left-auto right-0 z-[1] mt-3 w-28 rounded-box bg-base-content p-3 text-white shadow"
        >
          <li className="w-24">
            <Link
              to="aboutUs"
              smooth={true}
              duration={500}
              className="text-base"
            >
              About Us
            </Link>
          </li>
          <li className="w-24">
            <Link
              to="products"
              smooth={true}
              duration={500}
              className="text-base"
            >
              Products
            </Link>
          </li>
          <li className="w-24">
            <Link to="teams" smooth={true} duration={500} className="text-base">
              Teams
            </Link>
          </li>
        </ul>
      </div>
      {/* menu dropdown */}
    </div>
  );
};

export default Header;
