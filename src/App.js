import logo from './logo.svg';
import './App.css';
import LoginComponent from './login/LoginComponent'
import Approuter from './navigation/AppRouter'
import { Provider } from 'react-redux';
import store from './store'
function App() {
  return (
    <Provider store={store}>
 <div className="App">
      <Approuter>
      <LoginComponent>

</LoginComponent>
      </Approuter>
   
    </div>
    </Provider>
  );
}

export default App;
