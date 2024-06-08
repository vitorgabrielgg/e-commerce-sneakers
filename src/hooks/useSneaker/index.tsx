import { useContext } from "react";
import { SneakerContext } from "../../context";
import { sneakerActionTypes } from "../../context/Sneaker/action-types";

export const useSneaker = () => {
  const { state, dispatch } = useContext(SneakerContext);
  const { indexImg, openModal, countSneakers, qtdSneakers, sneakersImg } =
    state;

  const increaseIndexImg = () => {
    dispatch({ type: sneakerActionTypes.INCREASE_INDEX, payload: {} });
  };

  const decreaseIndexImg = () => {
    dispatch({ type: sneakerActionTypes.DECREASE_INDEX, payload: {} });
  };

  const changeIndexWithClick = (index: number) => {
    dispatch({ type: sneakerActionTypes.CLICK_INDEX, payload: { index } });
  };

  const sneakerImg = sneakersImg[indexImg];

  return {
    indexImg,
    openModal,
    qtdSneakers,
    countSneakers,
    sneakerImg,
    dispatch,
    increaseIndexImg,
    decreaseIndexImg,
    changeIndexWithClick,
  };
};
