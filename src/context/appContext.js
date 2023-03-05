import React, { useReducer, useContext } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LANGUAGE":
      return {
        language: action.payload,
      };
    default:
      return state;
  }
};

const listOfLanguages = ["en", "dk"];

const initialState = {
  language: "en",
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setLanguage = (language) => {
    console.log(language);
    if (listOfLanguages.includes(language)) {
      dispatch({ type: "SET_LANGUAGE", payload: language });
    }
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        setLanguage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom Hook der gør det muligt at bruge useContext nemmere.
const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
