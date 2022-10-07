import {TasksData} from '../../assets/FakeData';
import {
  CREATE_TASK,
  DELETE_TASK,
  UPDATE_TASK,
} from '../actions/types/taskTypes';

const defaultState = {
  list: [...TasksData],
};
export default function reducer(state = defaultState, {type, payload}) {
  switch (type) {
    case CREATE_TASK: {
      console.log(payload);
      return {
        ...state,
        list: [...state.list, payload],
      };
    }
    case DELETE_TASK: {
      let arrTasks = state.list.filter(list => list.id !== payload);
      return {
        ...state,
        list: [...arrTasks],
      };
    }
    case UPDATE_TASK:
      const array = state.list.map(object => {
        if (object?.id === payload?.id) {
          return {
            ...object,
            ...payload,
          };
        } else {
          return object;
        }
      });
      return {
        ...state,
        list: [...array],
      };

    default: {
      return state;
    }
  }
}
