import "./App.css";
import { createStore, applyMiddleware } from "redux";
import {rootReducers} from "./reducers/index";
import Counter from "./Counter";
import { Provider } from "react-redux";
var store = applyMiddleware()(createStore);

function App() {
  return (
    <Provider store={store(rootReducers)}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
