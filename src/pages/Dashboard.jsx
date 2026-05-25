import {ShoppingCart, TrendingUp, Users, DollarSign, Package, AlertTriangle} from "lucide-react";
import {KpiCard} from "../components/KpiCard";
import {PurchaseChart} from "../components/charts/PurchaseChart";
import {SalesChart} from "../components/charts/salesChart";

const kpiData = [
  {title:"Today Purchase", amount:"₹2,45,680", sub:"15 transactions",icon:ShoppingCart, trend:"+12.5%", isPositive:true, color:"text-blue-600", bg:"bg-blue-50" },
  {title:"Sales Today", amount:"₹3,89,450", sub:"22 invoices",icon:TrendingUp, trend:"+8.2%", isPositive:true, color:"text-green-600", bg:"bg-green-50" },
  {title:"Current Stock", amount:"2,458 MT", sub:"Multiple varieties", icon:Package,trend:"-3.1%", isPositive:false, color:"text-purple-600",bg:"bg-purple-50" },
  {title:"Pending Payments",amount:"₹5,67,890",sub:"18 suppliers", icon:AlertTriangle, trend:"+5.8%", isPositive:true, color:"text-orange-600", bg:"bg-orange-50" },
  {title:"Outstanding Receivables", amount:"₹8,95,320", sub:"34 customers", icon:DollarSign, trend:"-2.4%", isPositive:false, color:"text-yellow-600",bg:"bg-yellow-50" },
  {title:"Dispatch Pending", amount:"145 MT", sub:"8 orders", icon:Users, trend:"+15.3%",isPositive:true, color:"text-red-600", bg:"bg-red-50" },
];


const purchaseData = [
  { name: 'Jan', amount: 190000 },
  { name: 'Feb', amount: 230000 },
  { name: 'Mar', amount: 130000 },
];

const salesData = [
  { name: 'Jan', amount: 280000 },
  { name: 'Feb', amount: 320000 },
  { name: 'Mar', amount: 290000 },
];

function Dashboard() {
  return (
    <div className=" bg-[#f6f8fa] min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {kpiData.map((item, index) => (
          <KpiCard key={index} {...item} />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 ">
        <PurchaseChart data={purchaseData} />
        <SalesChart data={salesData} />
      </div>
    </div>
  );
}

export default Dashboard;