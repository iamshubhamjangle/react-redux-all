import React from 'react';
import './style.css';
import ComponentA from './Components/ComponentA.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      this.forceUpdate();
    });
  }

  handleClick(type) {
    const { store } = this.props;
    store.dispatch({ type: type, payload: '' });
  }

  render() {
    const { count } = this.props.store.getState();

    return (
      <div>
        App Component: {count}
        <button onClick={() => this.handleClick('increment')}>Increment</button>
        <button onClick={() => this.handleClick('decrement')}>Decrement</button>
        <ComponentA />
      </div>
    );
  }
}

export default App;
