/*
 * Define all the app routes here :)
 */

export const HOME = 'HOME';
export const DOCS = 'DOCS';
export const EXAMPLES = 'EXAMPLES';

const route = (path = '') => `${app.path}${path}`;
const extractComp = ({ Component }) => Component;

/**
 * Define here all the app routes
 * @type {{id: string, label: string, path:string, component: React.Component, exact?: boolean}[]}
 */
export const routes = [
  { id: 'home', path: route(), label: 'Home', exact: true, component: HOME },
  { id: 'documentation', path: route`docs`, label: 'Documentation', component: DOCS },
  { id: 'examples', path: route`examples`, label: 'Examples', component: EXAMPLES }
];

/**
 * Lazy loader for module Components
 * @type {{string: function}}
 */
export const componentLoader = {
  [HOME]: () => import(/* webpackChunkName: "home" */ 'modules/home/index').then(extractComp),
  [DOCS]: () => import(/* webpackChunkName: "docs" */ 'modules/docs/index').then(extractComp),
  [EXAMPLES]: () => import(/* webpackChunkName: "examples" */ 'modules/examples/index').then(extractComp),
};