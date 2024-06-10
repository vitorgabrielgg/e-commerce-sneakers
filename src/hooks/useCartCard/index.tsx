import { useCallback, useEffect } from "react";
import { sneakerActionTypes } from "../../context/Sneaker/action-types";
import { useSneaker } from "../useSneaker";

export const useCartCard = (ref?: React.RefObject<HTMLDivElement>) => {
  const { isCartOpen, dispatch } = useSneaker();

  const changeStateCart = useCallback(() => {
    dispatch({
      type: sneakerActionTypes.CHANGE_STATE_CART_COMPONENT,
      payload: {},
    });
  }, [dispatch]);

  useEffect(() => {
    const pageClickEvent = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (ref) {
        if (ref.current !== null && !ref.current.contains(target)) {
          changeStateCart();
        }
      }
    };
    if (isCartOpen) {
      window.addEventListener("click", pageClickEvent);
    }
    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [isCartOpen, changeStateCart, ref]);

  return {
    isCartOpen,
    changeStateCart,
  };
};
