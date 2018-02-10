import React, {PropTypes} from 'react';
import { Provider } from 'react-redux';
import GetYourGuide from '../reducers';
import { createStore } from 'redux';

class App extends React.Component {
  render() {
    const store = createStore(GetYourGuide);
    return (
      <div>
        <Provider store={store}>
          {this.props.children}
        </Provider>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
