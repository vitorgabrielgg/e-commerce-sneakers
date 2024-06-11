import { useEffect } from "react";
import { sneakerActionTypes } from "../../context/Sneaker/action-types";
import { useSneaker } from "../useSneaker";
import { changeOverflowStyle } from "../../utils";

export const useModal = () => {
  const { dispatch, openModal } = useSneaker();

  useEffect(() => {
    changeOverflowStyle(openModal);
  }, [openModal]);

  const changeStateModal = () => {
    dispatch({ type: sneakerActionTypes.CHANGE_STATE_MODAL, payload: {} });
  };

  return {
    openModal,
    changeStateModal,
  };
};
