import IconMinus from "../../../public/images/icon-minus.svg";
import IconPlus from "../../../public/images/icon-plus.svg";
import { useQtdSneaker } from "../../hooks";

export const QtdCountSneakers = () => {
  const { countSneakers, increaseQtd, decreaseQtd } = useQtdSneaker();

  return (
    <div className="bg-light_grayish_blue flex items-center justify-between h-14 rounded-lg md:w-[40%] xl:w-[35%]">
      <button onClick={decreaseQtd} className="px-6 h-full">
        <img src={IconMinus} alt="Diminuir quantidade" />
      </button>

      <span className="font-bold">{countSneakers}</span>

      <button onClick={increaseQtd} className="px-6 h-full">
        <img src={IconPlus} alt="Aumentar quantidade" />
      </button>
    </div>
  );
};
