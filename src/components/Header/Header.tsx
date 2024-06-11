// components
import { CartCard, Container } from "../../components/index";
import { Navbar } from "./Navbar";

// images
import Logo from "../../../public/images/logo.svg";
import IconMenu from "../../../public/images/icon-menu.svg";
import IconCloseMenu from "../../../public/images/icon-close.svg";
import IconCart from "../../../public/images/icon-cart.svg";
import Avatar from "../../../public/images/image-avatar.png";

// hooks
import { useCartCard, useMenu, useSneaker } from "../../hooks/index";
import { useRef } from "react";

export const Header = () => {
  const cartRef = useRef<HTMLDivElement>(null);
  const { changeStateCart } = useCartCard(cartRef);
  const { qtdSneakers } = useSneaker();
  const { openMenu, changeOpenMenu } = useMenu();

  return (
    <header>
      <Container className="flex items-center justify-between px-6 container:px-0 py-5 md:py-8 lg:py-10 md:border-b md:border-gray-200">
        <div className="flex items-baseline md:items-center gap-3 md:gap-8 lg:gap-14">
          <button
            type="button"
            className="md:hidden z-30"
            onClick={changeOpenMenu}
          >
            <img src={openMenu ? IconCloseMenu : IconMenu} alt="Menu" />
          </button>
          <img src={Logo} alt="Sneakers" />
          <Navbar />
        </div>

        <div className="flex items-center h-full gap-6 md:gap-10 relative">
          <div ref={cartRef}>
            <CartCard />
            <button
              type="button"
              onClick={changeStateCart}
              className="translate-y-[2px]"
            >
              <img src={IconCart} alt="Cart" className="w-6 md:w-[26px]" />
              {qtdSneakers > 0 && (
                <span className="absolute -top-[8px] -translate-x-1 md:-top-[10px] bg-orange_color text-white font-bold text-xs md:text-sm max-md:py-[1px] px-[10px] rounded-full">
                  {qtdSneakers}
                </span>
              )}
            </button>
          </div>

          <button
            type="button"
            className="border-2 border-transparent rounded-full hover:border-orange_color w-7 md:w-[50px] h-7 md:h-[50px] transition-colors"
          >
            <img src={Avatar} alt="Avatar" className="w-full h-full" />
          </button>
        </div>
      </Container>
    </header>
  );
};
