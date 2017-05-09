import React from 'react';

export default function renderActivity(WrappedComponent) {
  function RenderActivity(props) {
    return (<div className="activity"><WrappedComponent {...props} /></div>);
  }

  const wrappedComponentName = WrappedComponent.displayName
    || WrappedComponent.name
    || 'Component';

  RenderActivity.displayName = `renderActivity(${wrappedComponentName})`;
  return RenderActivity;
}
