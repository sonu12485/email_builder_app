import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import { 
    BrowserRouter as Router, Route, Switch, Redirect 
} from 'react-router-dom';

import reducers from './reducers';

import './style/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import IndexPage from './components/index';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import App from './components/App';
import Store from './components/Store';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>

        <Router>
            <Switch>
                <Route exact path="/" component={IndexPage} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/new" component={App} />
                <Route exact path="/store" component={Store} />
                <Redirect from="*" to={"/"} />
            </Switch>
        </Router>

    </Provider>
, document.getElementById('root'));

registerServiceWorker();
