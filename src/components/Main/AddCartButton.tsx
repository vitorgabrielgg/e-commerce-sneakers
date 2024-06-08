// images
import IconCart from "../../../public/images/icon-cart-black.svg";
import { useQtdSneaker } from "../../hooks";

export const AddCartButton = () => {
  const { addSneakersToCart } = useQtdSneaker();

  return (
    <button
      className="h-14 bg-orange_color text-very_dark_blue rounded-lg flex items-center justify-center gap-3 shadow-xl shadow-orange_color/30 md:shadow-none md:w-[60%] xl:w-[65%] hover:bg-orange_color/60 transition-colors"
      onClick={() => addSneakersToCart()}
    >
      <img src={IconCart} alt="" />
      <p className="font-bold text-very_dark_blue">Add to cart</p>
    </button>
  );
};
