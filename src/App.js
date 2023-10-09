import './App.css';
import CakeContainer from './component/CakeContainer';
import HooksCakeContainer from './component/HooksCakeContainer';
import IceCreamContainer from './component/IceCreamContainer';
import { Provider } from 'react-redux'
import store from './redux/store';

function App() {
  return (    
      <Provider store={store}>
        <div className="App">
          <IceCreamContainer />
          <HooksCakeContainer />
          <CakeContainer />
        </div>
      </Provider>
  );
}

export default App;
