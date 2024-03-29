import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import useToken from './hooks/useToken';
import UserContext from './contexts/UserContext';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AppPage from './pages/App'
import User from './pages/App/User';
import Workouts from './pages/App/Workouts';
import Workout from './pages/App/Workout';
import AddExercise from './pages/App/Workout/AddExercise';

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

          <Route
            path="/app"
            element={
              <ProtectedRouteGuard>
                <AppPage/>
              </ProtectedRouteGuard>
             }
            >
              <Route path="user" element={<User/>} />
              <Route path="workouts" element={<Workouts/>} />
              <Route path="workouts/:id" element={<Workout/>} />
              <Route path="workouts/:id/add-exercise" element={<AddExercise />} />
              <Route index path="*" element={<Navigate to="/app/user" />} />
          </Route>
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
