
import{RouterProvider,Route,createRoutesFromElements, createBrowserRouter,Navigate} from 'react-router-dom'
import { routes } from './routes/routes';
import { Suspense} from 'react';
import ErrorComponent from './components/common/ErrorComponent';
import SuspenseLoader from './components/common/SuspenseLoader';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path={routes.main.path} element={<Navigate to={`${routes.emails.path}/inbox`} />} />
      <Route path={routes.main.path} element={<routes.main.element />} >
        <Route path={`${routes.emails.path}/:type`} element={<routes.emails.element />} errorElement={<ErrorComponent />}/>
        <Route path={routes.view.path} element={<routes.view.element />} />
      </Route>

      <Route path={routes.invalid.path} element={<Navigate to={`${routes.emails.path}/inbox`} />} />
    </Route>
)
)

function App() {
  return (
    <Suspense fallback={<SuspenseLoader />}>
        <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
