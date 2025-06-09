import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const cryptoData = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    price: "$49,200",
    change: "+2.5%",
    volume: "$2.1B",
    positive: true,
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    price: "$3,456",
    change: "-1.2%",
    volume: "$1.8B",
    positive: false,
  },
  {
    name: "Cardano",
    symbol: "ADA",
    price: "$0.85",
    change: "+4.1%",
    volume: "$245M",
    positive: true,
  },
  {
    name: "Solana",
    symbol: "SOL",
    price: "$123.45",
    change: "+3.7%",
    volume: "$420M",
    positive: true,
  },
  {
    name: "Polkadot",
    symbol: "DOT",
    price: "$8.90",
    change: "-0.8%",
    volume: "$156M",
    positive: false,
  },
];

const CryptoTable = () => {
  return (
    <Card className="bg-white/10 backdrop-blur-sm border-purple-500/20">
      <CardHeader>
        <CardTitle className="text-white">Топ криптовалют</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-purple-500/20">
              <TableHead className="text-purple-200">Название</TableHead>
              <TableHead className="text-purple-200">Цена</TableHead>
              <TableHead className="text-purple-200">Изменение</TableHead>
              <TableHead className="text-purple-200">Объем</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cryptoData.map((crypto) => (
              <TableRow
                key={crypto.symbol}
                className="border-purple-500/20 hover:bg-white/5"
              >
                <TableCell>
                  <div>
                    <div className="text-white font-medium">{crypto.name}</div>
                    <div className="text-purple-200 text-sm">
                      {crypto.symbol}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-white font-medium">
                  {crypto.price}
                </TableCell>
                <TableCell>
                  <Badge
                    variant={crypto.positive ? "default" : "destructive"}
                    className="bg-transparent"
                  >
                    {crypto.change}
                  </Badge>
                </TableCell>
                <TableCell className="text-purple-200">
                  {crypto.volume}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default CryptoTable;
