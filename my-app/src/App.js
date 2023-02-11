import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './redux/store';
import ChatLogin from './components/Auth/ChatLogin';
import ChatRoom from './components/Chat/ChatRoom';

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/chat" component={ChatRoom} />
        <Route path="/" exact component={ChatLogin} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
