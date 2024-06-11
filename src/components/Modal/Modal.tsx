// hooks
import { useModal, useSneaker } from "../../hooks";

// components
import { SneakersThumbmails } from "../Main/SneakersThumbmails";

// images
import ArrowLeft from "../../../public/images/icon-previous.svg";
import ArrowRight from "../../../public/images/icon-next.svg";

export const Modal = () => {
  const { sneakerImg, decreaseIndexImg, increaseIndexImg } = useSneaker();
  const { openModal, changeStateModal } = useModal();

  return (
    <div
      className={`${
        openModal
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } min-h-screen w-full fixed top-0 bg-black/75 flex flex-col items-center justify-center transition-opacity duration-300`}
    >
      <div className="max-w-md lg:max-w-lg">
        <div className="space-y-5">
          <svg
            width="14"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-auto cursor-pointer"
            onClick={changeStateModal}
          >
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="#fff"
              fillRule="evenodd"
            />
          </svg>
          <div className="h-[400px] lg:h-[480px] relative">
            <img
              src={sneakerImg}
              alt="Seaker Image"
              className="rounded-lg h-full w-full"
            />

            <div className="absolute top-2/4 -translate-y-2/4 w-full flex items-center justify-between">
              <button
                className="bg-white h-12 w-12 rounded-full flex items-center justify-center -translate-x-[18px] lg:-translate-x-6"
                onClick={decreaseIndexImg}
              >
                <img src={ArrowLeft} alt="" className="w-[10px] lg:w-3" />
              </button>
              <button
                className="bg-white h-12 w-12 rounded-full flex items-center justify-center translate-x-[18px] lg:translate-x-6"
                onClick={increaseIndexImg}
              >
                <img src={ArrowRight} alt="" className="w-[10px] lg:w-3" />
              </button>
            </div>
          </div>
        </div>

        <SneakersThumbmails className="px-10" />
      </div>
    </div>
  );
};
