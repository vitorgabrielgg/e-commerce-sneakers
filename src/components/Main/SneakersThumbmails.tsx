// images
import Sneaker1Thumb from "../../../public/images/image-product-1-thumbnail.jpg";
import Sneaker2Thumb from "../../../public/images/image-product-2-thumbnail.jpg";
import Sneaker3Thumb from "../../../public/images/image-product-3-thumbnail.jpg";
import Sneaker4Thumb from "../../../public/images/image-product-4-thumbnail.jpg";

const arrThumbs = [Sneaker1Thumb, Sneaker2Thumb, Sneaker3Thumb, Sneaker4Thumb];

export const SneakersThumbmails = () => {
  return (
    <div className="hidden md:grid grid-cols-4 gap-6 mt-6">
      {arrThumbs.map((item, i) => (
        <div key={i} className="rounded-lg cursor-pointer bg-white group">
          <img
            src={item}
            alt=""
            className="rounded-lg group-hover:opacity-60 transition-opacity"
          />
        </div>
      ))}
    </div>
  );
};
