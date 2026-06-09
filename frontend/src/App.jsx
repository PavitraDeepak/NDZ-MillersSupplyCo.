import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Purchase from './pages/Purchase';
import NewPurchaseEntry from './pages/NewPurchaseEntry';
import SalesIn from './pages/SalesIn'; 
import SalesOut from './pages/SalesOut';
import MaterialInEntry from './pages/MaterialInEntry';
import MaterialOutEntry from './pages/MaterialOutEntry';
import NotFound from './pages/NotFound';

function App() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const verifySession = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/refresh-token', { 
            credentials: 'include' 
        });
        const data = await response.json();
        
        if (data.authenticated) {
          localStorage.setItem('accessToken', data.token);
          if (location.pathname === '/') {
            navigate('/dashboard', { replace: true });
          }
        } else {
          localStorage.removeItem('accessToken');
          if (location.pathname !== '/') {
             navigate('/', { replace: true });
          }
        }
      } catch (err) {
        console.error("Session verification failed", err);
      } finally {
        setLoading(false);
      }
    };
    
    verifySession();
  }, [navigate, location.pathname]); // Added dependencies for stability

  if (loading) return <div className="flex h-screen items-center justify-center">Loading...</div>;

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      }>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/purchase/new" element={<NewPurchaseEntry />} /> 
        <Route path="/sales/in" element={<SalesIn />} /> 
        <Route path="/sales/out" element={<SalesOut />} /> 
        <Route path="/sales/in/new" element={<MaterialInEntry />} />
        <Route path="/sales/out/new" element={<MaterialOutEntry />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;