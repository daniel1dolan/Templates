import React from "react";
import ReactDOM from "react-dom";

//Redux
import { createStore } from "redux";
import { Provider } from "react-redux";

//Router
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Components
import BaseLayout from "./components/layout/BaseLayout";
import App from "./App";

//Root Reducer
import rootReducer from "../reducers/rootReducer";

//Redux Store
let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
