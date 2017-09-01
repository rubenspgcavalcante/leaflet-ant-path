import pe from 'polyline-encoded';

export default (googleRoute) => {
  return pe.decode(googleRoute.routes[0].overview_polyline.points, 5)
};