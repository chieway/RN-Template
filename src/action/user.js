import {CHANGE_LOGIN_STATE} from '../constants/user';

export function setLoginState(status) {
  return {
    type: CHANGE_LOGIN_STATE,
    status,
  };
}
