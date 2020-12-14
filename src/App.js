import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './views/Login/Login';
import Home from './views/Home/Home';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/browse">
                        <Home />
                    </Route>
                    <Route exact path="/">
                        <Login />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
