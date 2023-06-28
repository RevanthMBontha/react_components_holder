import React from 'react';
import Comps from './Comps';
import './reactComponents.css';

const ReactComponents = () => {
  return (
    <div className="reactComponents section" id="reactComponents">
      <h2 className="section__title">Reusable React Components</h2>
      <span className="section__subtitle">
        A set of 14 React components built from scratch that can be dropped into
        any website as required.
      </span>

      <Comps />
    </div>
  );
};

export default ReactComponents;
