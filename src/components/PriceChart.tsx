import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const mockData = [
  { time: "00:00", price: 45000 },
  { time: "04:00", price: 46200 },
  { time: "08:00", price: 45800 },
  { time: "12:00", price: 47100 },
  { time: "16:00", price: 48300 },
  { time: "20:00", price: 47900 },
  { time: "24:00", price: 49200 },
];

const PriceChart = () => {
  return (
    <Card className="bg-white/10 backdrop-blur-sm border-purple-500/20">
      <CardHeader>
        <CardTitle className="text-white">График цен Bitcoin</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="time" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1F2937",
                  border: "1px solid #374151",
                  borderRadius: "8px",
                  color: "#fff",
                }}
              />
              <Line
                type="monotone"
                dataKey="price"
                stroke="#9b87f5"
                strokeWidth={2}
                dot={{ fill: "#9b87f5", strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default PriceChart;
