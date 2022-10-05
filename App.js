import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import Main from './src/Main/Main';
import {store, persistor} from './src/store/store';
import {PersistGate} from 'redux-persist/integration/react';
import {
  NotificationServices,
  requestUserPermission,
} from './src/utils/PushNotifications';

const App = () => {
  useEffect(() => {
    requestUserPermission();
    NotificationServices();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Main />
      </PersistGate>
    </Provider>
  );
};

export default App;
