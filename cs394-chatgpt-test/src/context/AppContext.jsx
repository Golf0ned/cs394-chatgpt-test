import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  swarms: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_SWARM':
      return { ...state, swarms: [...state.swarms, action.payload] };
    default:
      return state;
  }
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
