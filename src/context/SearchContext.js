import { createContext, useReducer } from "react";

const initialState = {
  city: "",
  date: [
    {
      startDate: new Date(),
      endDate: new Date(new Date().valueOf() + 1000 * 3600 * 24),
      key: "selection",
    },
  ],
  options: {
    adult: 1,
    children: 0,
    room: 1,
  },
};

export const SearchContext = createContext(initialState);

const SearchReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "NEW_SEARCH":
      return payload;
    case "RESET_SEARCH":
      return initialState;
    default:
      return state;
  }
};

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, initialState);

  return (
    <SearchContext.Provider
      value={{
        city: state.city,
        date: state.date,
        options: state.options,
        dispatch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
