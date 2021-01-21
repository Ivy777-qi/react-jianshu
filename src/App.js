import React from 'react';
import { BrowserRouter  as Router,Route} from 'react-router-dom';
import Header from './common/header';
import { Provider } from 'react-redux';
import store from './store';
import Home from './pages/home';
import Detail from './pages/detail';


class App extends React.Component {
  render() {
    return (
    //  <Header/>不能包含下面
      <Provider store={store}>
        
          <Router>
          <Header/>
            {/* exact表示精确字符 */}
          <Route exact path="/"   component ={Home}></Route>
          <Route exact path="/detail"  component ={Detail}></Route>
          </Router>
      </Provider>
    )
  }

}

export default App;
