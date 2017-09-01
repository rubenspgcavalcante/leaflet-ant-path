import React from 'react';
import { Route } from 'react-router-dom';
import find from 'lodash/find'

import { Component as Home } from "./modules/home/index";
import { Component as Docs } from "./modules/docs/index";
import { Component as Examples } from './modules/examples/index';

const route = (path = '') => `${app.path}${path}`;

/**
 * Define here all the app routes
 * @type {{id: string, label: string, path:string, component: React.Component, exact?: boolean}[]}
 */
export const routes = [
  { id: 'home', path: route(), label: 'Home', component: Home, exact: true },
  { id: 'documentation', path: route`docs`, label: 'Documentation', component: Docs },
  { id: 'examples', path: route`examples`, label: 'Examples', component: Examples }
];

export const getRoute = (id) => find(routes, { id });

export const routesFactory = () => {
  return routes.map(({ id, label, path, component, exact }) =>
    <Route key={id} path={path} component={component} exact={exact} />
  )
};