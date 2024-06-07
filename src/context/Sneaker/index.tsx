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
  qtdSneakers: number;
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
  qtdSneakers: qtdLocalStorage ? JSON.parse(qtdLocalStorage) : 0,
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
        indexImg: state.indexImg >= 4 ? 0 : state.indexImg++,
      };

    case sneakerActionTypes.DECREASE_INDEX:
      return {
        ...state,
        indexImg: state.indexImg <= -1 ? 3 : state.indexImg--,
      };

    case sneakerActionTypes.CLICK_INDEX:
      return {
        ...state,
        indexImg: action.payload.qtd,
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
