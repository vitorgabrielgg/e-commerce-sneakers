// Components

import { CartCard, Container } from "../../components/index";

// Images
import Logo from "../../../public/images/logo.svg";
import IconMenu from "../../../public/images/icon-menu.svg";
import IconCart from "../../../public/images/icon-cart.svg";
import Avatar from "../../../public/images/image-avatar.png";
import { Navbar } from "./Navbar";
import { useCartCard, useSneaker } from "../../hooks/index";
import { useRef } from "react";

export const Header = () => {
  const cartRef = useRef<HTMLDivElement>(null);
  const { changeStateCart } = useCartCard(cartRef);
  const { qtdSneakers } = useSneaker();

  return (
    <header>
      <Container className="flex items-center justify-between px-6 container:px-0 py-5 md:py-8 lg:py-10 md:border-b md:border-gray-200">
        <div className="flex items-baseline md:items-center gap-3 md:gap-8 lg:gap-14">
          <button type="button" className="md:hidden">
            <img src={IconMenu} alt="Menu" />
          </button>
          <img src={Logo} alt="Sneakers" />
          <Navbar />
        </div>

        <div className="flex items-center gap-6 relative">
          <div ref={cartRef}>
            <CartCard />
            <button type="button" onClick={changeStateCart}>
              <img src={IconCart} alt="Cart" className="w-6" />
              {qtdSneakers > 0 && (
                <span className="absolute -top-[7px] -translate-x-1 md:top-0 bg-orange_color text-white font-bold text-sm px-[10px] rounded-full">
                  {qtdSneakers}
                </span>
              )}
            </button>
          </div>

          <button
            type="button"
            className="border-2 border-transparent rounded-full hover:border-orange_color transition-colors"
          >
            <img src={Avatar} alt="Avatar" className="w-[26px] md:w-10" />
          </button>
        </div>
      </Container>
    </header>
  );
};
