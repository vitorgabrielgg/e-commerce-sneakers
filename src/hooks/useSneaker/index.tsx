import { useContext } from "react";
import { SneakerContext } from "../../context";
import { sneakerActionTypes } from "../../context/Sneaker/action-types";

export const useSneaker = () => {
  const { state, dispatch } = useContext(SneakerContext);
  const {
    indexImg,
    openModal,
    countSneakers,
    qtdSneakers,
    sneakersImg,
    isCartOpen,
  } = state;

  const increaseIndexImg = () => {
    dispatch({ type: sneakerActionTypes.INCREASE_INDEX, payload: {} });
  };

  const decreaseIndexImg = () => {
    dispatch({ type: sneakerActionTypes.DECREASE_INDEX, payload: {} });
  };

  const changeIndexWithClick = (index: number) => {
    dispatch({ type: sneakerActionTypes.CLICK_INDEX, payload: { index } });
  };

  const deleteSneakersCart = () => {
    dispatch({ type: sneakerActionTypes.DELETE_QTD_SNEAKERS, payload: {} });
  };

  const sneakerImg = sneakersImg[indexImg];

  return {
    isCartOpen,
    indexImg,
    openModal,
    qtdSneakers,
    countSneakers,
    sneakerImg,
    dispatch,
    increaseIndexImg,
    decreaseIndexImg,
    changeIndexWithClick,
    deleteSneakersCart,
  };
};
