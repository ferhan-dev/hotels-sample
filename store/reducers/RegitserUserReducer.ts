import { AnyAction } from 'redux';

const initialState: any = {
  newUser: null,
};

const RegisterUser = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'Register_User': {
      return { ...state, newUser: action.payload };
    }
    default:
      return state;
  }
};

export default RegisterUser;
