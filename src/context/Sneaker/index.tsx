import { ReactNode, createContext, useReducer } from "react";

// images
import Sneaker1 from "../../../public/images/image-product-1.jpg";
import Sneaker2 from "../../../public/images/image-product-2.jpg";
import Sneaker3 from "../../../public/images/image-product-3.jpg";
import Sneaker4 from "../../../public/images/image-product-4.jpg";
import { sneakerActionTypes } from "./action-types";

//import {sneakerActionTypes} from './action-types'

const arrSneakers = [Sneaker1, Sneaker2, Sneaker3, Sneaker4];

const qtdLocalStorage = localStorage.getItem("qtd");

type StateTypes = {
  indexImg: number;
  sneakersImg: string[];
  openModal: boolean;
  openMenu: boolean;
  countSneakers: number;
  qtdSneakers: number;
  isCartOpen: boolean;
};

type ActionTypes = {
  type: string;
  payload: {
    [key: string]: number;
  };
};

const initialState = {
  indexImg: 0,
  sneakersImg: arrSneakers,
  openModal: false,
  openMenu: false,
  countSneakers: 0,
  qtdSneakers: qtdLocalStorage ? JSON.parse(qtdLocalStorage) : 0,
  isCartOpen: false,
};

type ContextProps = {
  state: StateTypes;
  dispatch: React.Dispatch<ActionTypes>;
};

export const SneakerContext = createContext<ContextProps>({
  state: {
    ...initialState,
  },
  dispatch: () => {},
});

const sneakerReducer = (state: StateTypes, action: ActionTypes) => {
  switch (action.type) {
    case sneakerActionTypes.INCREASE_INDEX:
      return {
        ...state,
        indexImg: state.indexImg >= 3 ? 0 : state.indexImg + 1,
      };

    case sneakerActionTypes.DECREASE_INDEX:
      return {
        ...state,
        indexImg: state.indexImg <= 0 ? 3 : state.indexImg - 1,
      };

    case sneakerActionTypes.CLICK_INDEX:
      return {
        ...state,
        indexImg: action.payload.index,
      };

    case sneakerActionTypes.SET_QTD_SNEAKERS:
      localStorage.setItem("qtd", JSON.stringify(action.payload.qtd));
      return {
        ...state,
        qtdSneakers: action.payload.qtd,
        countSneakers: 0,
      };

    case sneakerActionTypes.INCREASE_COUNT_SNEAKERS:
      return {
        ...state,
        countSneakers: state.countSneakers + 1,
      };

    case sneakerActionTypes.DECREASE_COUNT_SNEAKERS:
      return {
        ...state,
        countSneakers: state.countSneakers - 1,
      };

    case sneakerActionTypes.CHANGE_STATE_CART_COMPONENT:
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };

    case sneakerActionTypes.DELETE_QTD_SNEAKERS:
      localStorage.setItem("qtd", JSON.stringify(0));
      return {
        ...state,
        qtdSneakers: 0,
      };

    case sneakerActionTypes.CHANGE_STATE_MODAL: {
      return {
        ...state,
        openModal: !state.openModal,
      };
    }

    case sneakerActionTypes.CHANGE_STATE_MENU:
      return {
        ...state,
        openMenu: !state.openMenu,
      };

    default:
      return state;
  }
};

export const SneakerProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(sneakerReducer, initialState);

  return (
    <SneakerContext.Provider value={{ state, dispatch }}>
      {children}
    </SneakerContext.Provider>
  );
};
