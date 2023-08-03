import React from 'react';
import AppRouter from './router/AppRouter';
import AuthContextProvider from './context/AuthContext';
import { ToastContainer} from 'react-toastify';


function App() {
  return (
    <div>
      <AuthContextProvider>
        <AppRouter />
        <ToastContainer />
      </AuthContextProvider>
    </div>
  );
}

export default App;
