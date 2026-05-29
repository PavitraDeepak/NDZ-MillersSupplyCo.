import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Purchase from './pages/Purchase';
import NewPurchaseEntry from './pages/NewPurchaseEntry';
import SalesIn from './pages/SalesIn'; 
import SalesOut from './pages/SalesOut';
import MaterialInEntry from './pages/MaterialInEntry';
import MaterialOutEntry from './pages/MaterialOutEntry';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/purchase/new" element={<NewPurchaseEntry />} /> 
        <Route path="/sales/in" element={<SalesIn />} /> 
        <Route path="/sales/out" element={<SalesOut />} /> 
        <Route path="/sales/in/new" element={<MaterialInEntry />} />
        <Route path="/sales/out/new" element={<MaterialOutEntry />} />

      </Route>
    </Routes>
  );
}

export default App;