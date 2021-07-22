import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Err404, Login, Register } from './pages';
import { ContextsProvider } from './contexts/ContextsProvider';

import './App.css';
import './General.css';

function App() {
   return (
      <ContextsProvider>
         <Router>
            <Switch>
               <Route exact path="/register" component={Register} />
               <Route exact path="/login" component={Login} />
               <Route path="/" component={Err404} />
            </Switch>
         </Router>
      </ContextsProvider>
   );
}

export default App;
