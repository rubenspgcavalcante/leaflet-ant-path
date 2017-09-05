import find from 'lodash/find';

export const getRoute = (routes, id) => find(routes, { id });