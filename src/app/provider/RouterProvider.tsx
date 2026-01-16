import { RouterProvider as RRDRouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div className="p-6">cyber</div>,
  },
]);

export function RouterProvider() {
  return <RRDRouterProvider router={router} />;
}
