import { Route, Routes, Navigate } from 'react-router-dom';
import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from './Layout/Layout';
import authOperations from '../redux/store/auth-operations';
import Home from './Home/Home';

const Contacts = lazy(() => import('./Contacts/Contacts'));
const RegisterForm = lazy(() => import('./RegisterForm/RegisterForm'));
const LoginForm = lazy(() => import('./LoginForm/LoginForm'));

const App = () => {
  const isLoggIn = useSelector(state => state.user.isLoggedIn);
  const refreshUser = useSelector(state => state.user.isRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    !refreshUser && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/contacts"
            element={isLoggIn ? <Contacts /> : <Navigate to="/login" />}
          />
          <Route
            path="register"
            element={isLoggIn ? <Navigate to="/contacts" /> : <RegisterForm />}
          />
          <Route
            path="login"
            element={isLoggIn ? <Navigate to="/contacts" /> : <LoginForm />}
          />
        </Route>
      </Routes>
    )
  );
};

export default App;
