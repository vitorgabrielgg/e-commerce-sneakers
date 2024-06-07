// Images
import Sneaker from "../../../public/images/image-product-1.jpg";

import ArrowLeft from "../../../public/images/icon-previous.svg";
import ArrowRight from "../../../public/images/icon-next.svg";
import { SneakersThumbmails } from "./SneakersThumbmails";

export const SneakersImages = () => {
  return (
    <section className="relative md:w-2/4 md:pl-6 lg:px-10 xl:px-20">
      <div>
        <div className="h-80 sm:h-96 lg:h-[432px] md:rounded-lg overflow-hidden">
          <img src={Sneaker} alt="" className="h-full w-full object-cover" />
        </div>

        <div className="md:hidden absolute top-2/4 -translate-y-2/4 w-full flex items-center justify-between px-5">
          <button className="bg-white h-9 w-9 rounded-full flex items-center justify-center">
            <img src={ArrowLeft} alt="" className="w-[10px]" />
          </button>
          <button className="bg-white h-9 w-9 rounded-full flex items-center justify-center">
            <img src={ArrowRight} alt="" className="w-[10px]" />
          </button>
        </div>
      </div>

      <SneakersThumbmails />
    </section>
  );
};
