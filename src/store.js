import { createContext, useReducer } from "react";

const Store = createContext();
const initialState = {
  skills: [],
  unSkills: [],
  customers: [],
  artisans: [],
  start_artisan: 0,
  start_customer: 0,
  start_skill: 0,
  start_unSkill: 0,
  loading: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "START_FETCHING":
      return { ...state, loading: true };
    case "END_FETCHING":
      return { ...state, loading: false };
    case "SET_SKILL":
      return {
        ...state,
        skills: action.payload,
      };
    case "SET_UNSKILL":
      return {
        ...state,
        unSkills: action.payload,
      };
    case "SET_CUSTOMER":
      return {
        ...state,
        customers: action.payload,
      };
    case "SET_ARTISAN":
      return {
        ...state,
        artisans: action.payload,
        loading: false,
      };
    case "INCREASE_START_ARTISAN":
      return { ...state, start_artisan: action.payload };
    case "REDUCE_START_ARTISAN":
      return { ...state, start_artisan: action.payload };
    case "INCREASE_START_CUSTOMER":
      return { ...state, start_customer: action.payload };
    case "REDUCE_START_CUSTOMER":
      return { ...state, start_customer: action.payload };
    case "INCREASE_START_SKILL":
      return { ...state, start_skill: action.payload };
    case "REDUCE_START_SKILL":
      return { ...state, start_skill: action.payload };
    case "INCREASE_START_UNSKILL":
      return { ...state, start_unSkill: action.payload };
    case "REDUCE_START_UNSKILL":
      return { ...state, start_unSkill: action.payload };
    default:
      return state;
  }
}
function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}

export { Store, StoreProvider };
