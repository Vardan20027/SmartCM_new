import React from 'react';
import {store} from '../../store/store';
import {makeActions} from './MakeAction';

export default function dispatch(type, payload) {
  const dispatch = store.dispatch;
  return dispatch(makeActions(type, payload));
}
