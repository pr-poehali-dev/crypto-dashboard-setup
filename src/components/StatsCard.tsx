import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
}

const StatsCard = ({ title, value, change }: StatsCardProps) => {
  const isPositive = change.startsWith("+");

  return (
    <Card className="bg-white/10 backdrop-blur-sm border-purple-500/20 hover:bg-white/15 transition-all duration-300">
      <CardHeader className="pb-2">
        <CardTitle className="text-purple-200 text-sm font-medium">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-white mb-1">{value}</div>
        <div
          className={`text-sm ${isPositive ? "text-green-400" : "text-red-400"}`}
        >
          {change}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
