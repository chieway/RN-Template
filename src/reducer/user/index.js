import {CHANGE_LOGIN_STATE} from '../../constants/user';

const initState = {
  isLogin: false,
};

export default function user(state = initState, action) {
  switch (action.type) {
    case CHANGE_LOGIN_STATE:
      return {
        ...state,
        isLogin: action.isLogin,
      };
    default:
      return state;
  }
}
