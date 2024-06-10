import { useSneaker } from "../useSneaker";
import { sneakerActionTypes } from "../../context/Sneaker/action-types";

export const useQtdSneaker = () => {
  const { qtdSneakers, countSneakers, dispatch } = useSneaker();

  const increaseQtd = () => {
    dispatch({ type: sneakerActionTypes.INCREASE_COUNT_SNEAKERS, payload: {} });
  };

  const decreaseQtd = () => {
    if (countSneakers <= 0) {
      return;
    }
    dispatch({ type: sneakerActionTypes.DECREASE_COUNT_SNEAKERS, payload: {} });
  };

  const addSneakersToCart = () => {
    dispatch({
      type: sneakerActionTypes.SET_QTD_SNEAKERS,
      payload: { qtd: countSneakers + qtdSneakers },
    });
  };

  return {
    countSneakers,
    increaseQtd,
    decreaseQtd,
    addSneakersToCart,
  };
};
