import "./App.css";
import CakeContainer from "./components/CakeContainer";
import HookCakeContainer from "./components/HookCakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import IceCreamContainer from "./components/IceCreamContainer";
import CakeWithPayload from "./components/CakeWithPayload";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer />
        <HookCakeContainer />
        <IceCreamContainer />
        <CakeWithPayload /> */}
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
