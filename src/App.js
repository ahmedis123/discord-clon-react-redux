import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Chat from './Chat.js';
import Sidebar from './Sidebar.js';
import { selectUser } from "./features/userSlice";
import Login from './login';
import { auth } from "./firebase";
import { login, logout } from "./features/userSlice";

function App() {

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

 useEffect(() => {

  auth.onAuthStateChanged( (authUser) => {
   if(authUser){
     dispatch(
       login({ 
       uid: authUser.uid,
        photo: authUser.photoURL,
        email: authUser.email,
        displayName: authUser.displayName,
       })
     );
   } else {
     dispatch(logout());
   }
  });
}, [dispatch]);

  return (
     <div className="app">
       {user ? (
         <>
         <Sidebar />
         <Chat />
         </>
       ): (
          <Login />
       )}
     
    </div>
  );
}

export default App;
