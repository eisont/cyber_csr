import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import AppRouter from '@/app/router';
import { store } from '@/app/store';
import { useAuthAndUserInfo, useScrollToTop } from '@/shared/hooks';

const App = () => {
  useScrollToTop();
  useAuthAndUserInfo();
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </BrowserRouter>
  );
};

export default App;
