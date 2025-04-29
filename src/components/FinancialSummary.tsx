import { ArrowUp, ArrowDown, ArrowRight } from 'lucide-react';

type FinancialSummaryProps = {
  month: string;
};

const FinancialSummary = ({ month }: FinancialSummaryProps) => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex flex-col mb-6 items-start">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Até o momento</h2>
        <span className="text-xs text-gray-500 dark:text-gray-400">Fev 25</span>
      </div>
      
      <div className="flex gap-6">
        <div className="space-y-3 flex-1">
          {/* Entrou card */}
          <div className="rounded-xl bg-emerald-100 dark:bg-emerald-900/20 p-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 flex items-center justify-center">
                <ArrowUp className="h-5 w-5 text-emerald-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Entrou</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Receitas</p>
              </div>
            </div>
            <span className="font-medium text-gray-900 dark:text-gray-100">R$ 0,00</span>
          </div>
          
          {/* Saiu card */}
          <div className="rounded-xl bg-red-100 dark:bg-red-900/20 p-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 flex items-center justify-center">
                <ArrowDown className="h-5 w-5 text-red-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Saiu</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Despesas</p>
              </div>
            </div>
            <span className="font-medium text-gray-900 dark:text-gray-100">R$ 0,00</span>
          </div>
          
          {/* Sobrou card */}
          <div className="rounded-xl bg-gray-100 dark:bg-gray-800 p-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 flex items-center justify-center">
                <ArrowRight className="h-5 w-5 text-gray-800 dark:text-gray-200" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Sobrou</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Saldo</p>
              </div>
            </div>
            <span className="font-medium text-gray-900 dark:text-gray-100">R$ 0,00</span>
          </div>
        </div>
        
        {/* Circle chart */}
        <div className="relative h-36 w-36 flex items-center justify-center">
          <div className="h-32 w-32 rounded-full border-8 border-gray-200 dark:border-gray-700"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-xs">
            <div className="flex items-center gap-1 mb-1">
              <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
              <span className="text-gray-600 dark:text-gray-300">Entrou: <span className="font-medium text-gray-900 dark:text-white">R$ 0,00</span></span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-red-500"></div>
              <span className="text-gray-600 dark:text-gray-300">Saiu: <span className="font-medium text-gray-900 dark:text-white">R$ 0,00</span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialSummary;