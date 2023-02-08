import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import useToken from './hooks/useToken';
import UserContext from './contexts/UserContext';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import useLocalStorage from './hooks/useLocalStorage';

export default function App() {
  const [userData, setUserData] = useLocalStorage('userData', {});
  return (
    <>
    <UserContext.Provider value={{ userData, setUserData }}>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn/>} />
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/sign-in" element={<SignIn/>} />

          {/* <Route
            path="/navbar"
            element={
              <ProtectedRouteGuard>
                < />
              </ProtectedRouteGuard>
             }
            >
              <Route path="diary" element={} />
              <Route path="workouts" element={} />
              <Route path="user" element={} />
              <Route index path="*" element={<Navigate to="/navbar/workouts" />} />
          </Route> */}
        </Routes>
      </Router>
    </UserContext.Provider>
    </>
  );
}

function ProtectedRouteGuard({ children }) {
  const token = useToken();

  if (!token) {
    return <Navigate to="/sign-in" />;
  }

  return <>{children}</>;
}
