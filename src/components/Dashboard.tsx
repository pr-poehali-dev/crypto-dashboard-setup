import StatsCard from "@/components/StatsCard";
import PriceChart from "@/components/PriceChart";
import CryptoTable from "@/components/CryptoTable";
import Portfolio from "@/components/Portfolio";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Крипто Дашборд</h1>
          <p className="text-purple-200">Отслеживайте свои цифровые активы</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard title="Общий баланс" value="$12,345.67" change="+2.3%" />
          <StatsCard title="Bitcoin" value="$45,123" change="+5.2%" />
          <StatsCard title="Ethereum" value="$3,456" change="-1.8%" />
          <StatsCard title="Портфель" value="15 активов" change="+3 новых" />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2">
            <PriceChart />
          </div>
          <div>
            <Portfolio />
          </div>
        </div>

        <div className="mt-8">
          <CryptoTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
