import { BarChart } from '@mui/x-charts/BarChart';
import { useEffect, useState } from 'react';

const AnnualResults = () => {
  const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  const values = [12, 20, 16, 11, 5, 21, 15, 6, 11, 10, 16, 13];
  const [chartHeight, setChartHeight] = useState(300);

  // Atualiza a altura do gráfico com base no tamanho da tela
  useEffect(() => {
    const updateChartHeight = () => {
      if (window.innerWidth < 640) { // sm breakpoint
        setChartHeight(200);
      } else if (window.innerWidth < 1024) { // lg breakpoint
        setChartHeight(250);
      } else {
        setChartHeight(300);
      }
    };

    updateChartHeight();
    window.addEventListener('resize', updateChartHeight);
    return () => window.removeEventListener('resize', updateChartHeight);
  }, []);

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Resultado Anual</h2>
        <div className="flex items-center">
          <span className="text-xs text-gray-500 dark:text-gray-400">Resultado por dia</span>
          <svg className="h-4 w-4 text-gray-400 dark:text-gray-500 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
        </div>
      </div>
      
      <div className="flex-grow w-full min-h-[200px]">
        <BarChart
          width={undefined}
          height={chartHeight}
          series={[
            {
              data: values,
              color: '#334155',
              label: '',
              valueFormatter: (value) => `${value}k`,
            },
          ]}
          xAxis={[
            {
              data: months,
              scaleType: 'band',
              tickLabelStyle: {
                fontSize: 10,
                color: '#94a3b8',
              },
            },
          ]}
          yAxis={[
            {
              tickMinStep: 5,
              max: 25,
              tickLabelStyle: {
                fontSize: 10,
                color: '#94a3b8',
              },
            },
          ]}
          margin={{ 
            left: 35, 
            right: 5, 
            top: 20, 
            bottom: window.innerWidth < 640 ? 20 : 30 
          }}
          slotProps={{
            legend: {
              hidden: true
            }
          }}
          sx={{
            '.MuiBarElement-root': {
              borderRadius: 0
            },
            width: '100%',
            height: '100%'
          }}
        />
      </div>
    </div>
  );
};

export default AnnualResults;