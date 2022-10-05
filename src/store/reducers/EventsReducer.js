import {EventsData} from '../../assets/FakeData';

const defaultState = {
  list: [...EventsData],
};
export default function reducer(state = defaultState, {type, payload}) {
  switch (type) {
    default: {
      return state;
    }
  }
}
