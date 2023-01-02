import "./App.css";

import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";

// Redux Stuff
import { Provider } from "react-redux";
import store from "./redux/store";

const reduxStore = store;

function App() {
  return (
    <Provider store={reduxStore}>
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
