import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import UserRoute from './hoc/UserRoute';
import AdminRoute from './hoc/AdminRoute';
import NavBar from './components/NavBar/NavBar';


// import { useSelector, useDispatch } from 'react-redux';
// import { decrement, increment, incrementByAmount } from './redux/features/counter';


// Pages import
import Profile from './pages/Profile';
import Counter from './pages/Counter';
  
function App() {

  const [isAuth, setIsAuth] = useState(false)

  return (
    <>
      <Router>
        <NavBar/>
        <Route path="/" exact>
          <button onClick={()=> {setIsAuth(true)}}>Login</button>
          <button onClick={()=> {setIsAuth(false)}}>Logout</button>
          <Link to="/profile">Go to profile</Link>
          <Link to="/counter">Go to counter</Link>
        </Route>
        <UserRoute path="/profile" exact component={Profile} isAuth={isAuth} />
        <UserRoute path="/counter" exact component={Counter} isAuth={!isAuth} />

        {/* Test */}
        <AdminRoute path="/admin/dashboard" exact component={Counter} isAuth={!isAuth} />
        {/* Test */}

      </Router>
    </>
  );
}

export default App
