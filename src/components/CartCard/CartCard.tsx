//images
import SneakerImg from "../../../public/images/image-product-1-thumbnail.jpg";
import IconDelete from "../../../public/images/icon-delete.svg";

import { useSneaker } from "../../hooks";
import { Button } from "../index";
import { useCartCard } from "../../hooks/useCartCard";

export const CartCard = () => {
  const { qtdSneakers, deleteSneakersCart } = useSneaker();

  const { isCartOpen } = useCartCard();

  const priceSneakers = (125 * qtdSneakers).toFixed(2);

  return (
    <div
      className={`absolute top-14 md:top-14 lg:top-16 max-w-[360px] w-screen -right-4 container:right-0 bg-white z-20 rounded-lg shadow-2xl ${
        isCartOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } transition-opacity duration-300`}
    >
      <div className="pt-6">
        <h2 className="text-very_dark_blue font-bold px-5 border-b border-gray-200 pb-5">
          Cart
        </h2>

        {qtdSneakers === 0 ? (
          <>
            <p className="text-center w-full py-16 text-dark_grayish_blue font-bold">
              Your cart is empty
            </p>
          </>
        ) : (
          <>
            <div className="py-6">
              <div className="flex items-center justify-between px-5">
                <img
                  src={SneakerImg}
                  alt="Image Sneaker"
                  className="w-1/6 rounded"
                />
                <div className="">
                  <p className="text-dark_grayish_blue">
                    Fall Limited Edition Sneakers
                  </p>
                  <p className="text-dark_grayish_blue">
                    $125.00 x {qtdSneakers}
                    <span className="text-very_dark_blue font-bold">
                      {" "}
                      ${priceSneakers}
                    </span>
                  </p>
                </div>
                <button onClick={deleteSneakersCart}>
                  <img src={IconDelete} alt="Delete Sneakers" />
                </button>
              </div>
              <div className="px-5 mt-6">
                <Button className="shadow-none">
                  <p className="text-very_dark_blue font-bold">Checkout</p>
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
