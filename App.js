import React from 'react';
import { Provider } from 'react-redux';

/** Importing the store for the app */
import Store from './app/store';

import Navigator from './app/views/navigation';

console.disableYellowBox = true;
/** Initialising the app with the proper Provider
 * and the store (defined inside the app folder)
 */
const App = () => {
  return (
    <Provider store={Store}>
      <Navigator />
    </Provider>
  );
};

export default App;
