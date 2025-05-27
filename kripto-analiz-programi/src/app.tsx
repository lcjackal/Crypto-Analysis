import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MainPanel from './components/MainPanel';
import Watchlist from './components/Watchlist';
import Settings from './components/Settings';

const App: React.FC = () => (
  <Router>
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/" element={<MainPanel />} />
        </Routes>
      </div>
    </div>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
export default App;