import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { users } from './utils/player';
import Layout from './components/Layout.jsx';
import { LeaderboardList } from './components/PaginatedLeaderBoard.jsx';

function App() {
  const remaining = users.slice(3);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LeaderboardList users={remaining} />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;