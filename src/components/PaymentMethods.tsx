import { Printer } from 'lucide-react';
import { PieChart } from '@mui/x-charts/PieChart';

const PaymentMethods = () => {
  const data = [
    { id: 0, value: 54, label: 'Cartão de Crédito', color: '#4285F4' },
    { id: 1, value: 20, label: 'Pix', color: '#34A853' },
    { id: 2, value: 26, label: 'Cartão De Débito', color: '#EA4335' },
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Formas de recebimento do período</h2>
        <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
          <Printer className="h-4 w-4" />
        </button>
      </div>
      
      <div className="flex-grow flex items-center justify-center">
        <PieChart
          series={[
            {
              data,
              innerRadius: 55,
              outerRadius: 80,
              paddingAngle: 3,
              cornerRadius: 5,
              startAngle: 90,
              endAngle: 450,
              highlightScope: { faded: 'global', highlighted: 'item' },
              faded: { innerRadius: 55, additionalRadius: -30, color: 'gray' },
              arcLabel: () => '',
            },
          ]}
          slotProps={{
            legend: { hidden: true }
          }}
          width={200}
          height={180}
          margin={{ right: 0, left: 0, top: 0, bottom: 0 }}
        />
      </div>
      
      <div className="flex gap-8 justify-center mt-2">
        {data.map((item) => (
          <div key={item.id} className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
            <span className="text-xs text-gray-600 dark:text-gray-300">{item.label}</span>
            <span className="text-xs font-medium text-gray-900 dark:text-white ml-0.5">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentMethods;