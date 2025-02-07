import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface PopulationData {
  year: number;
  value: number;
}

export default function PopulationChart({
  populationData,
}: {
  populationData: PopulationData[];
}) {
  console.log("populationData", populationData);
  if (!populationData.length) return <p>No data about population</p>;

  const data = {
    labels: populationData.map((p) => p.year),
    datasets: [
      {
        label: "Population",
        data: populationData.map((p) => p.value),
        borderColor: "blue",
        backgroundColor: "rgba(0, 0, 255, 0.2)",
      },
    ],
  };

  return <Line data={data} />;
}
