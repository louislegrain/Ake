import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Chats, Err404, Login, Register } from './pages';
import { ContextsProvider } from './contexts/ContextsProvider';

import './App.css';
import './General.css';

function App() {
   return (
      <Router>
         <ContextsProvider>
            <Provider store={store}>
               <Switch>
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/chats/:id?" component={Chats} />
                  <Route path="/" component={Err404} />
               </Switch>
            </Provider>
         </ContextsProvider>
      </Router>
   );
}

export default App;
