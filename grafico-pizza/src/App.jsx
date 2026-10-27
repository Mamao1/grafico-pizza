
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title
} from 'chart.js';

import { Pie } from 'react-chartjs-2';
import './App.css';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title
);

const dados = {
  labels: [
    'Alimentação',
    'Transporte',
    'Lazer',
    'Estudos'
  ],
  datasets: [
    {
      label: 'Gastos mensais (R$)',
      data: [400, 200, 150, 250],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#4BC0C0'
      ],
      borderColor: '#FFFFFF',
      borderWidth: 2
    }
  ]
};

const opcoes = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom'
    },
    title: {
      display: true,
      text: 'Distribuição dos gastos mensais'
    }
  }
};

function App() {
  return (
    <div className="pagina">
      <h1>Gráfico de Pizza</h1>

      <div className="grafico">
        <Pie data={dados} options={opcoes} />
      </div>
    </div>
  );
}

export default App;
