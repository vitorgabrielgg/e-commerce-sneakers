import { useCallback, useEffect } from "react";
import { sneakerActionTypes } from "../../context/Sneaker/action-types";
import { useSneaker } from "../useSneaker";
import { changeOverflowStyle } from "../../utils";

export const useMenu = () => {
  const { openMenu, dispatch } = useSneaker();

  useEffect(() => {
    changeOverflowStyle(openMenu);
  }, [openMenu]);

  const changeOpenMenu = useCallback(() => {
    dispatch({ type: sneakerActionTypes.CHANGE_STATE_MENU, payload: {} });
  }, [dispatch]);
  return {
    openMenu,
    changeOpenMenu,
  };
};
