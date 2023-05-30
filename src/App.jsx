import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TodoPage, LoginPage, SignUpPage, HomePage } from './pages';
<<<<<<< HEAD
import { AuthProvider } from 'contexts/AuthContext';
=======
>>>>>>> 8700042235de5fd5803b7250e53ad1b7232cf8c0

function App() {
  return (
    <div className="app">
      <BrowserRouter>
<<<<<<< HEAD
        <AuthProvider>
          <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route path="todos" element={<TodoPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </AuthProvider>
=======
        <Routes>
          <Route path="*" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="todo" element={<TodoPage />} />
        </Routes>
>>>>>>> 8700042235de5fd5803b7250e53ad1b7232cf8c0
      </BrowserRouter>
    </div>
  );
}

export default App;
