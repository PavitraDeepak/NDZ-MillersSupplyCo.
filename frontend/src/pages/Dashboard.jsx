import { useState, useEffect } from "react";
import { ShoppingCart, TrendingUp, Users, DollarSign, Package, AlertTriangle } from "lucide-react";
import { KpiCard } from "../components/KpiCard";
import { PurchaseChart } from "../components/charts/PurchaseChart";
import { SalesChart } from "../components/charts/SalesChart";
import { TransactionsTable } from "../components/TransactionsTable";

function Dashboard() {
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/kpi/dashboard-metrics')
      .then((res) => res.json())
      .then((data) => {
        setMetrics(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching dashboard metrics:", err);
        setLoading(false);
      });
  }, []);

  const formatCurrency = (val) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);
  const formatQty = (val) => new Intl.NumberFormat('en-IN').format(val) + " MT";

  // Dynamic KPI Card configuration
  const cards = [
    { title: "Today Purchase", amount: loading ? "..." : formatCurrency(metrics?.purchaseToday?.amount || 0), sub: loading ? "..." : `${metrics?.purchaseToday?.count || 0} orders`, icon: ShoppingCart, trend: "+12.5%", isPositive: true, color: "text-blue-600", bg: "bg-blue-50" },
    { title: "Sales Today", amount: loading ? "..." : formatCurrency(metrics?.salesToday?.amount || 0), sub: loading ? "..." : `${metrics?.salesToday?.count || 0} invoices`, icon: TrendingUp, trend: "+8.2%", isPositive: true, color: "text-green-600", bg: "bg-green-50" },
    { title: "Current Stock", amount: loading ? "..." : formatQty(metrics?.currentStock?.amount || 0), sub: "Available in warehouse", icon: Package, trend: "-3.1%", isPositive: false, color: "text-purple-600", bg: "bg-purple-50" },
    { title: "Pending Payments", amount: loading ? "..." : formatCurrency(metrics?.pendingPayments?.amount || 0), sub: loading ? "..." : `${metrics?.pendingPayments?.count || 0} suppliers`, icon: AlertTriangle, trend: "+5.8%", isPositive: true, color: "text-orange-600", bg: "bg-orange-50" },
    { title: "Outstanding Receivables", amount: loading ? "..." : formatCurrency(metrics?.outstandingReceivables?.amount || 0), sub: loading ? "..." : `${metrics?.outstandingReceivables?.count || 0} customers`, icon: DollarSign, trend: "-2.4%", isPositive: false, color: "text-yellow-600", bg: "bg-yellow-50" },
    { title: "Dispatch Pending", amount: loading ? "..." : formatQty(metrics?.dispatchPending?.amount || 0), sub: loading ? "..." : `${metrics?.dispatchPending?.count || 0} orders`, icon: Users, trend: "+15.3%", isPositive: true, color: "text-red-600", bg: "bg-red-50" },
  ];

  return (
    <div className="bg-[#f6f8fa] min-h-screen p-6">
      {/* KPI Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((item, index) => (
          <KpiCard key={index} {...item} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <PurchaseChart data={metrics?.purchaseHistory || []} />
        <SalesChart data={metrics?.salesHistory || []} />
      </div>

      <div className="mt-8 bg-white p-6 rounded shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Recent Transactions</h3>
        <TransactionsTable data={metrics?.recentTransactions || []} />
      </div>
    </div>
  );
}

export default Dashboard;