import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const portfolioData = [
  { name: "Bitcoin", symbol: "BTC", percentage: 45, value: "$5,500" },
  { name: "Ethereum", symbol: "ETH", percentage: 30, value: "$3,700" },
  { name: "Cardano", symbol: "ADA", percentage: 15, value: "$1,850" },
  { name: "Solana", symbol: "SOL", percentage: 10, value: "$1,230" },
];

const Portfolio = () => {
  return (
    <Card className="bg-white/10 backdrop-blur-sm border-purple-500/20">
      <CardHeader>
        <CardTitle className="text-white">Портфель</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {portfolioData.map((asset) => (
          <div key={asset.symbol} className="space-y-2">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-white font-medium">{asset.name}</div>
                <div className="text-purple-200 text-sm">{asset.symbol}</div>
              </div>
              <div className="text-right">
                <div className="text-white font-medium">{asset.value}</div>
                <div className="text-purple-200 text-sm">
                  {asset.percentage}%
                </div>
              </div>
            </div>
            <Progress value={asset.percentage} className="h-2" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default Portfolio;
