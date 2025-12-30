import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import AppRouter from '@/app/router';
import { store } from '@/redux';
import { AuthAndUserInfo, ScrollToTop } from '@/shared/hooks';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Provider store={store}>
        <AuthAndUserInfo />
        <AppRouter />
      </Provider>
    </BrowserRouter>
  );
};

export default App;
