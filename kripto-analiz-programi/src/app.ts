import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MainPanel from './components/MainPanel';
import Watchlist from './components/Watchlist';
import Settings from './components/Settings';
import './styles.css'; // Assuming there's a CSS file for styling

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <Sidebar />
                <div className="main-content">
                    <Switch>
                        <Route path="/watchlist" component={Watchlist} />
                        <Route path="/settings" component={Settings} />
                        <Route path="/" component={MainPanel} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));