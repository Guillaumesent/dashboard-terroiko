import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: 'Ventes',
      data: [30, 20, 50, 60, 40],
      backgroundColor: 'rgba(75,192,192,0.5)',
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { position: 'top' },
    title: { display: true, text: 'Chiffres mensuels' },
  },
};

export default function ChartComponent() {
  return <Bar data={data} options={options} />;
}
