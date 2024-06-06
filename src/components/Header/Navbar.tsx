const arrNavbar = ["Collections", "Men", "Women", "About", "Contact"];

export const Navbar = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-6">
        {arrNavbar.map((item, i) => (
          <li key={i} className="relative group">
            <a
              href="#"
              className="md:text-sm lg:text-base text-dark_grayish_blue group-hover:text-very_dark_blue transition-colors"
            >
              {item}
            </a>
            <div className="h-1 w-full bg-orange_color absolute -bottom-[43px] lg:-bottom-[50.5px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </li>
        ))}
      </ul>
    </nav>
  );
};
