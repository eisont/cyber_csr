import { QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { ScrollToTop } from '@/app/provider';
import AppRouter from '@/app/routes';
import { store } from '@/app/store';
import { queryClient } from '@/shared/query/queryClient';

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ScrollToTop />
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
