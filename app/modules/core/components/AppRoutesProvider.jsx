import React, { Children, cloneElement } from 'react';
import { getRoute } from "../utils/app";

export default ({ appRoutes, children }) => {
  if (Array.isArray(children)) {
    throw { msg: 'Please provide only one child for AppRouteProvider' };
  }
  const Child = Children.map(children, (child) => cloneElement(child, { appRoutes, getRoute }));

  return (
    <div className="routes-provider" >
      {Child}
    </div >
  );
}