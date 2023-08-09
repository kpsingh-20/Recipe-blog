import React from "react";
import  ReactDOM from "react-dom";

import { Provider } from "react-redux"; // keep track of store which is that global state.
                                        // and that allows us to use store from anywhere
                                        // inside of the app.

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";

import App from "./App";

const  store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 

document.getElementById("root"));