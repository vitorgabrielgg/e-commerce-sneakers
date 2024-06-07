// images
import Sneaker1Thumb from "../../../public/images/image-product-1-thumbnail.jpg";
import Sneaker2Thumb from "../../../public/images/image-product-2-thumbnail.jpg";
import Sneaker3Thumb from "../../../public/images/image-product-3-thumbnail.jpg";
import Sneaker4Thumb from "../../../public/images/image-product-4-thumbnail.jpg";
import { useSneaker } from "../../hooks";

const arrThumbs = [Sneaker1Thumb, Sneaker2Thumb, Sneaker3Thumb, Sneaker4Thumb];

export const SneakersThumbmails = () => {
  const { changeIndexWithClick, indexImg } = useSneaker();

  return (
    <div className="hidden md:grid grid-cols-4 gap-6 mt-6">
      {arrThumbs.map((item, i) => (
        <div
          key={i}
          className={`${
            indexImg === i && "rounded-xl border-[3px] border-orange_color"
          }  cursor-pointer bg-white group`}
          onClick={() => changeIndexWithClick(i)}
        >
          <img
            src={item}
            alt=""
            className={`${
              indexImg === i ? "opacity-40" : "group-hover:opacity-60"
            } rounded-lg transition-opacity`}
          />
        </div>
      ))}
    </div>
  );
};
