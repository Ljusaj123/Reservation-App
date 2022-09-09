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
  property: "",
  min: 0,
  max: 999,
  url: "http://localhost:5500/api/v1/hotels",
};

export const SearchContext = createContext(initialState);

const SearchReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "NEW_SEARCH":
      if (payload.property && payload.city) {
        return {
          ...payload,
          url: `http://localhost:5500/api/v1/hotels?city=${payload.city}&type=${payload.property}&min=${payload.min}&max=${payload.max}`,
        };
      } else if (payload.city) {
        return {
          ...payload,
          url: `http://localhost:5500/api/v1/hotels?city=${payload.city}&min=${payload.min}&max=${payload.max}`,
        };
      } else if (payload.property) {
        return {
          ...payload,
          url: `http://localhost:5500/api/v1/hotels?type=${payload.property}&min=${payload.min}&max=${payload.max}`,
        };
      } else if (payload.min && payload.max) {
        return {
          ...payload,
          url: `http://localhost:5500/api/v1/hotels?&min=${payload.min}&max=${payload.max}`,
        };
      } else {
        return {
          ...payload,
          url: `http://localhost:5500/api/v1/hotels`,
        };
      }
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
        url: state.url,
        property: state.property,
        min: state.min,
        max: state.max,
        dispatch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
