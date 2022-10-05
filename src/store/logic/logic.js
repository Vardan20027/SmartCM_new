import {createLogic} from 'redux-logic';
import axios from 'axios';
import {GET_DATA_REQUEST, GET_DATA_SUCCESS} from '../actions/types/dataTypes';

export const GetDataLogic = createLogic({
  type: GET_DATA_REQUEST,
  latest: true,

  process({getState, action}, dispatch, done) {
    axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then(res => dispatch({type: GET_DATA_SUCCESS, payload: res}))
      .catch(err => {
        console.error(err);
      })
      .then(() => done());
  },
});
