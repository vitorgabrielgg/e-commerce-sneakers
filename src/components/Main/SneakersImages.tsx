// images
import ArrowLeft from "../../../public/images/icon-previous.svg";
import ArrowRight from "../../../public/images/icon-next.svg";

// components
import { SneakersThumbmails } from "./SneakersThumbmails";

// hooks
import { useModal, useSneaker } from "../../hooks";

export const SneakersImages = () => {
  const { sneakerImg, increaseIndexImg, decreaseIndexImg } = useSneaker();
  const { changeStateModal } = useModal();

  return (
    <section className="relative md:w-2/4 md:pl-6 lg:px-10 xl:px-20">
      <div>
        <div
          className="h-80 sm:h-96 lg:h-[432px] md:rounded-lg overflow-hidden pointer-events-none md:pointer-events-auto"
          onClick={changeStateModal}
        >
          <img
            src={sneakerImg}
            alt=""
            className="h-full w-full object-cover cursor-pointer"
          />
        </div>

        <div className="md:hidden absolute top-2/4 -translate-y-2/4 w-full flex items-center justify-between px-5">
          <button
            className="bg-white h-9 w-9 rounded-full flex items-center justify-center"
            onClick={decreaseIndexImg}
          >
            <img src={ArrowLeft} alt="" className="w-[10px]" />
          </button>
          <button
            className="bg-white h-9 w-9 rounded-full flex items-center justify-center"
            onClick={increaseIndexImg}
          >
            <img src={ArrowRight} alt="" className="w-[10px]" />
          </button>
        </div>
      </div>

      <SneakersThumbmails />
    </section>
  );
};
