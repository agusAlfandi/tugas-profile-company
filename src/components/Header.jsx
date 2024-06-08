import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="navbar bg-base-100 flex justify-between">
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
        <ul className="menu menu-horizontal px-1 text-lg">
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
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
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
          className="menu menu-xs dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-28 right-0 left-auto"
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
