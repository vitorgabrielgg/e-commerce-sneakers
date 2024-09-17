import { useMenu } from "../../hooks";

const arrNavbar = ["Collections", "Men", "Women", "About", "Contact"];

export const Navbar = () => {
  const { openMenu } = useMenu();

  return (
    <nav className="flex">
      <ul
        className={`${
          openMenu
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } flex flex-col md:opacity-100 md:flex-row gap-6 max-md:absolute max-md:bg-white max-md:z-20 max-md:top-0 max-md:left-0 max-md:min-h-screen max-md:pt-20 max-md:px-5 max-md:w-[65%] transition-all duration-300`}
      >
        {arrNavbar.map((item, i) => (
          <li key={i} className="relative group">
            <a
              href="#"
              className="md:text-sm lg:text-base text-very_dark_blue max-md:font-bold md:text-dark_grayish_blue md:group-hover:text-very_dark_blue transition-colors"
            >
              {item}
            </a>
            <div className="hidden md:block h-1 w-full bg-orange_color absolute -bottom-[46px] lg:-bottom-[54px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </li>
        ))}
      </ul>
      <div
        className={`${
          openMenu ? "opacity-100 bg-black/75 w-[35%]" : "opacity-0"
        }  min-h-screen md:hidden absolute top-0 right-0 z-30 transition-all duration-300`}
      ></div>
    </nav>
  );
};
