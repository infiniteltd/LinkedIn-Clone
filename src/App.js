import React from 'react';
import './App.css';
import { selectUser } from './features/userSlice';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Login from './components/Login';
import { initializeUseSelector } from 'react-redux/es/hooks/useSelector';

function App() {
  const user = initializeUseSelector(selectUser);


  return (
    <div className="app">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          {/* widgets */}
        </div>
      )}

    </div>
  );
}

export default App;
