import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import Layout from './components/layout/Layout'
import Login from './pages/Login'
import Calendar from './pages/calendar/Calendar'
import Account from './pages/Account'
import StudentPage from './pages/teacher/StudentPage'
import Summary from './pages/teacher/Summary'
import NotFound from './pages/NotFound'

function RequireAuth({ children }: { children: React.ReactNode }) {
  const { user } = useAuth()
  return user ? <>{children}</> : <Navigate to="/login" replace />
}

function RequireTeacher({ children }: { children: React.ReactNode }) {
  const { user } = useAuth()
  if (!user) return <Navigate to="/login" replace />
  if (user.role !== 'teacher') return <Navigate to="/calendar" replace />
  return <>{children}</>
}

function RoleRedirect() {
  const { user } = useAuth()
  if (!user) return <Navigate to="/login" replace />
  return <Navigate to={user.role === 'teacher' ? '/calendar' : '/calendar'} replace />
}

function LoginRoute() {
  const { user } = useAuth()
  if (user) return <Navigate to={user.role === 'teacher' ? '/calendar' : '/calendar'} replace />
  return <Login />
}

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginRoute />} />
      <Route
        path="/"
        element={
          <RequireAuth>
            <Layout />
          </RequireAuth>
        }
      >
        <Route index element={<RoleRedirect />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="account" element={<Account />} />
        <Route path="student" element={<RequireTeacher><StudentPage /></RequireTeacher>} />
        <Route path="summary" element={<RequireTeacher><Summary /></RequireTeacher>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
