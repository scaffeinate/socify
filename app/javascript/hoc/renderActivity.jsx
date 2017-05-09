import React from 'react';

export default function renderActivty(WrappedComponent) {
  return () => (
    <div className="activity"><WrappedComponent {...this.props} /></div>
  );
}
