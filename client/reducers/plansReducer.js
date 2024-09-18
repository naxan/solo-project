import * as types from '../constants/actionTypes';

const initialState = {};

const plansReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TESTING: {
      console.log('testing');
    }
    default: {
      return state;
    }
  }
};

export default plansReducer;
