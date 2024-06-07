import { AddCartButton } from "./AddCartButton";
import { QtdCountSneakers } from "./QtdCountSneakers";

export const SneakersInfo = () => {
  return (
    <section className="md:w-2/4">
      <div className="px-6 md:px-8 lg:px-10 xl:px-12 md:pt-4 lg:pt-12 space-y-2 md:space-y-4">
        <span className="uppercase font-bold text-xs text-dark_grayish_blue tracking-widest">
          Sneaker Company
        </span>
        <h1 className="text-very_dark_blue font-bold text-[1.7rem] lg:text-4xl xl:text-[2.8rem] leading-8 xl:leading-[3rem]">
          Fall Limited Edition Sneakers
        </h1>
        <p className="text-dark_grayish_blue xl:text-lg">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>

        <div className="flex md:flex-col items-center md:items-start justify-between pt-3 md:gap-2">
          <div className="flex items-center gap-3">
            <p className="text-very_dark_blue font-bold text-[1.7rem] lg:text-3xl">
              $125.00
            </p>
            <span className="bg-black text-white font-bold text-sm px-2 py-[2px] rounded-md">
              50%
            </span>
          </div>
          <p className="text-dark_grayish_blue font-bold line-through xl:text-lg">
            $250.00
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 pt-4 pb-28 xl:pr-14">
          <QtdCountSneakers />
          <AddCartButton />
        </div>
      </div>
    </section>
  );
};
