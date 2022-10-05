import {USER_REQUEST} from '../actions/types/userTypes';
import {GET_DATA_SUCCESS} from '../actions/types/dataTypes';

const defaultState = {
  data: [],
};

export default function reducer(state = defaultState, {payload, type}) {
  switch (type) {
    case USER_REQUEST: {
      const name =
        payload.additionalUserInfo.profile.first_name ||
        payload.additionalUserInfo.profile.given_name;
      return {
        ...state,
        name: name,
      };
    }
    case GET_DATA_SUCCESS: {
      // console.log(payload);
      return {
        ...state,
        data: payload,
      };
    }
    default:
      return state;
  }
}
