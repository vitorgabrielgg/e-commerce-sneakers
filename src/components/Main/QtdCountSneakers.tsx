import IconMinus from "../../../public/images/icon-minus.svg";
import IconPlus from "../../../public/images/icon-plus.svg";

export const QtdCountSneakers = () => {
  return (
    <div className="bg-light_grayish_blue flex items-center justify-between h-14 rounded-lg px-6 md:w-[40%] xl:w-[35%]">
      <button>
        <img src={IconMinus} alt="Diminuir quantidade" />
      </button>

      <span className="font-bold">0</span>

      <button>
        <img src={IconPlus} alt="Aumentar quantidade" />
      </button>
    </div>
  );
};
