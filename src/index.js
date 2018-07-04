import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { 
    BrowserRouter as Router, Route, Switch, Redirect 
} from 'react-router-dom';

import reducers from './reducers';

import './style/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './components/App';
import Store from './components/Store';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>

        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/store" component={Store} />
                <Redirect from="*" to={"/"} />
            </Switch>
        </Router>

    </Provider>
, document.getElementById('root'));

registerServiceWorker();
