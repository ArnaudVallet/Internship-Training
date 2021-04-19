import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Profile from './pages/Profile';

function App() {

  const [isAuth, setIsAuth] = useState(false)

  return (
    <>
      <Router>
        <Route path="/" exact>
          <button onClick={()=> {setIsAuth(true)}}>Login</button>
          <button onClick={()=> {setIsAuth(false)}}>Logout</button>
          <Link to="/profile">Go to profile</Link>
        </Route>
        <ProtectedRoute path="/profile" exact component={Profile} isAuth={isAuth} />
      </Router>
    </>
  );
}

export default App;
