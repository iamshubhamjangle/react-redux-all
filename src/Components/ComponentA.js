import React from 'react';
import ComponentB from './ComponentB'

class ComponentA extends React.Component {
  render() {
    return (
      <div>
        Component A
        <ComponentB />
      </div>
    );
  }
}

export default ComponentA;
