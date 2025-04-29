import { LineChart } from '@mui/x-charts/LineChart';

const CashFlow = () => {
  const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  
  const entradas = [45, 52, 49, 60, 55, 58, 50, 52, 48, 58, 55, 45];
  const saidas = [35, 38, 40, 45, 35, 40, 30, 35, 38, 48, 50, 40];
  const saldo = entradas.map((value, index) => value - saidas[index]);

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Fluxo de caixa anual</h2>
        <div className="flex items-center">
          <span className="text-xs text-gray-500 dark:text-gray-400">Gráfico do período</span>
          <svg className="h-4 w-4 text-gray-400 dark:text-gray-500 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
        </div>
      </div>
      
      <div className="flex-grow">
        <LineChart
          series={[
            {
              data: entradas,
              label: '',
              color: '#10B981',
              curve: 'natural',
              valueFormatter: (value) => `${value}k`,
            },
            {
              data: saidas,
              label: '',
              color: '#F43F5E',
              curve: 'natural',
              valueFormatter: (value) => `${value}k`,
            },
            {
              data: saldo,
              label: '',
              color: '#4F46E5',
              curve: 'natural',
              valueFormatter: (value) => `${value}k`,
            },
          ]}
          xAxis={[{
            data: months,
            scaleType: 'point',
            tickLabelStyle: {
              fontSize: 10,
              paddingTop: 10,
            },
          }]}
          yAxis={[{
            min: 0,
            max: 65,
            tickNumber: 6,
            tickLabelStyle: {
              fontSize: 10,
            }
          }]}
          height={230}
          margin={{ left: 45, right: 20, top: 20, bottom: 40 }}
          sx={{
            '& .MuiLineElement-root': {
              strokeWidth: 2,
            },
            '& .MuiMarkElement-root': {
              display: 'none',
            },
          }}
          slotProps={{
            legend: {
              hidden: true
            }
          }}
        />
      </div>
      
      <div className="flex justify-center mt-3 space-x-6">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-emerald-500 rounded-sm mr-2"></div>
          <span className="text-xs text-gray-600 dark:text-gray-300">Entrou</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-rose-500 rounded-sm mr-2"></div>
          <span className="text-xs text-gray-600 dark:text-gray-300">Saídas</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-indigo-500 rounded-sm mr-2"></div>
          <span className="text-xs text-gray-600 dark:text-gray-300">Saldo Final</span>
        </div>
      </div>
    </div>
  );
};

export default CashFlow;