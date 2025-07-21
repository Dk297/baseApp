import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import RootNavigation from 'src/navigation/RootNavigation';
import { persistor, store } from 'src/store/store';
import 'src/utilities/i18n';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="dark-content" />
        <RootNavigation />
      </PersistGate>
    </Provider>
  );
}

export default App;
