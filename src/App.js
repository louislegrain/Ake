import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Err404, Login, Register } from './pages';
import { LanguageContext } from './contexts/languages/language';

import './App.css';

function App() {
   return (
      <LanguageContext>
         <Router>
            <Switch>
               <Route exact path="/" component={Register} />
               <Route exact path="/login" component={Login} />
               <Route path="/" component={Err404} />
            </Switch>
         </Router>
      </LanguageContext>
   );
}

export default App;
