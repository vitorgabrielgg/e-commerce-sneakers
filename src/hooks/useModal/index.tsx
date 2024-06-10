import { sneakerActionTypes } from "../../context/Sneaker/action-types";
import { useSneaker } from "../useSneaker";

export const useModal = () => {
  const { dispatch, openModal } = useSneaker();

  if (openModal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  const changeStateModal = () => {
    dispatch({ type: sneakerActionTypes.CHANGE_STATE_MODAL, payload: {} });
  };

  return {
    openModal,
    changeStateModal,
  };
};
