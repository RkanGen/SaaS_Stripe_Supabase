import { AuthProvider, useAuth } from './context/AuthProvider';
import Auth from './components/Auth';

function App() {
  const { user } = useAuth();

  if (!user) return <Auth />;
  return <div>Welcome, {user.email}</div>
}

export default function Root() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}
