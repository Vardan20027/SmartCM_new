import {EventsData} from '../../assets/FakeData';
import {CREATE_EVENT} from '../actions/types/eventTypes';

const defaultState = {
  list: [...EventsData],
};
export default function reducer(state = defaultState, {type, payload}) {
  switch (type) {
    case CREATE_EVENT:
      console.log(payload);
      return {
        ...state,
        list: [...state.list, payload],
      };

    default: {
      return state;
    }
  }
}
