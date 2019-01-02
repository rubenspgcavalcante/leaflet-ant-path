import repository from './reducers/repository';
import routes from './reducers/routes';
import appRoutes from './reducers/appRoutes';
import loading from './reducers/loading';
import vectors from './reducers/vectors';

import _AppRoutes from './components/AppRoutes';
import _AppRoutesProvider from './components/containers/AppRoutesProvider';
import _AsyncComponent from './components/containers/AsyncComponent';

export const AppRoutes = _AppRoutes;
export const AppRoutesProvider = _AppRoutesProvider;
export const AsyncComponent = _AsyncComponent;

export const reducers = { repository, routes, appRoutes, loading, vectors };