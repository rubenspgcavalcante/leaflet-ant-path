import React from 'react';
import { Route } from 'react-router-dom';
import { AsyncComponent } from '../index';

export default ({ appRoutes }) => {
  const routes = appRoutes.map(route => ({
    ...route,
    Component: () => <AsyncComponent component={route.component} />
  }));

  return (
    <div >
      {routes.map(({ id, label, path, Component, exact }) =>
        <Route key={id} path={path} exact={exact} component={Component} />
      )}
    </div >
  );
}