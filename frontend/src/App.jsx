import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute'; // Import your gatekeeper
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

  useEffect(() => {
    const verifySession = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/refresh-token', {
          credentials: 'include'
        }); 
        
        if (response.ok) {
          navigate('/dashboard');
        }
      } catch (err) {
        console.log("No active session", err);
      } finally {
        setLoading(false);
      }
    };
    verifySession();
  }, [navigate]);

  if (loading) return <div>Loading...</div>;

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