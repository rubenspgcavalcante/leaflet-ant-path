import React from 'react';

export default ({ loading }) => (
  <div className={`bar-loader ${loading ? 'is-active' : ''}`} />
);