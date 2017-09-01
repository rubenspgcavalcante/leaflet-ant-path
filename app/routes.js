import React from 'react';
import { Route } from 'react-router-dom';
import { Component as Home } from "./modules/home/index";
import { Component as Docs } from "./modules/docs/index";
import { Component as Examples } from './modules/examples/index';

const route = (path = '') => `${app.path}${path}`;

/**
 * Define here all the app routes
 * @type {{label: string, path: string, component: React.Component, exact?: boolean}[]}
 */
export const routes = [
  { label: 'Home', path: route(), component: Home, exact: true },
  { label: 'Documentation', path: route`docs`, component: Docs },
  { label: 'Examples', path: route`examples`, component: Examples }
];

export const routesFactory = () => {
  return routes.map(({ label, path, component, exact }) =>
    <Route key={path} path={path} component={component} exact={exact} />
  )
};