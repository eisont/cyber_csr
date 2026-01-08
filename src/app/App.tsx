import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { AuthAndUserInfo, ScrollToTop } from '@/app/provider';
import AppRouter from '@/app/routes';
import { store } from '@/app/store';

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
