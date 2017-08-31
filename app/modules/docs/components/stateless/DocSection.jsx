import React from 'react';
import Card from 'modules/ui/components/stateless/Card';

export default ({ id, title, children }) => (
  <div id={id} className="column is-10-desktop is-12-mobile" >
    <Card title={title} >
      {children}
    </Card >
  </div >
);