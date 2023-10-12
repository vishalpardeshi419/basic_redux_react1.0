import './App.css';
// import CakeContainer from './component/CakeContainer';
// import HooksCakeContainer from './component/HooksCakeContainer';
// import IceCreamContainer from './component/IceCreamContainer';
// import NewCakeContainer from './component/NewCakeContainer';
import { Provider } from 'react-redux'
import store from './redux/store';
// import ItemContainer from './component/itemContainer';
import UserContainer from './component/UserContainer';

function App() {
  return (    
      <Provider store={store}>
        <div className="App">
          {/* <ItemContainer cake />
          <ItemContainer />
          <IceCreamContainer />
          <HooksCakeContainer />
          <CakeContainer />
          <NewCakeContainer /> */}
          <UserContainer />
        </div>
      </Provider>
  );
}

export default App;
