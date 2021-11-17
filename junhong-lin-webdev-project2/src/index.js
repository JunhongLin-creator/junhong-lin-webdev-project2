import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import Board from './Board'
import WelcomePage from './WelcomePage';
import reducers from './reducers/reducers';
import { createStore} from 'redux'

const store = createStore(reducers);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
      <Link to={"/"}>Home</Link>
        <Routes>
          <Route path="/" element={<WelcomePage/>} />
          <Route path="/gameBoard/:gameType" element={<Board />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
