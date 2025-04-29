import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MonthSelector from './MonthSelector';
import FinancialSummary from './FinancialSummary';
import PaymentMethods from './PaymentMethods';
import AnnualResults from './AnnualResults';
import CashFlow from './CashFlow';
import PendingTransactions from './PendingTransactions';
import { Calendar } from 'lucide-react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from '@/components/ui/select';

// Definindo um estilo compartilhado para os cards
const cardStyle = "bg-white dark:bg-gray-800 rounded-3xl shadow-md p-4 sm:p-6 transition-all duration-300 hover:shadow-lg";

const Dashboard = () => {
  const [selectedYear, setSelectedYear] = useState('2025');
  const [selectedBank, setSelectedBank] = useState('All');
  const [currentMonth, setCurrentMonth] = useState('Fev');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Header onMenuClick={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <main className="ml-0 sm:ml-16 pt-24 p-4 sm:p-6">
        <div className="px-2 sm:px-4 mb-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">Visão Geral</h1>
            
            <div className="flex flex-wrap gap-2">
              <div className="w-full sm:w-auto bg-gray-100 dark:bg-gray-800 rounded-md overflow-hidden flex items-center py-2 pl-3 pr-2">
                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger className="border-0 bg-transparent h-10 px-3 min-w-0 w-28 sm:w-32 focus:ring-0 focus:ring-offset-0 text-sm sm:text-base font-medium">
                    <Calendar className="h-5 w-5 mr-2 text-gray-600 dark:text-gray-400" strokeWidth={1.5} />
                    <SelectValue placeholder="Ano" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2025">2025</SelectItem>
                    <SelectItem value="2026">2026</SelectItem>
                  </SelectContent>
                </Select>
                
                <div className="w-px h-7 bg-gray-300 dark:bg-gray-700 mx-2"></div>
                
                <Select value={selectedBank} onValueChange={setSelectedBank}>
                  <SelectTrigger className="border-0 bg-transparent h-10 px-3 min-w-0 w-36 sm:w-40 focus:ring-0 focus:ring-offset-0 text-sm sm:text-base font-medium">
                    <SelectValue placeholder="Banco" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">Todos</SelectItem>
                    <SelectItem value="Nubank">Nubank</SelectItem>
                    <SelectItem value="Itaú">Itaú</SelectItem>
                    <SelectItem value="Santander">Santander</SelectItem>
                    <SelectItem value="Bradesco">Bradesco</SelectItem>
                    <SelectItem value="Inter">Inter</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        <div className="px-2 sm:px-4">
          <MonthSelector currentMonth={currentMonth} onSelectMonth={setCurrentMonth} />
        </div>

        {/* Primeira linha de cards com alturas iguais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6 mt-4 px-2 sm:px-4">
          <div className={`${cardStyle} lg:col-span-4 h-full`}>
            <FinancialSummary month={currentMonth} />
          </div>
          <div className={`${cardStyle} lg:col-span-4 h-full`}>
            <PaymentMethods />
          </div>
          <div className={`${cardStyle} lg:col-span-4 h-full`}>
            <PendingTransactions />
          </div>
        </div>

        {/* Segunda linha de cards com alturas iguais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6 mt-6 px-2 sm:px-4">
          <div className={`${cardStyle} lg:col-span-4 h-full`}>
            <AnnualResults />
          </div>
          <div className={`${cardStyle} lg:col-span-4 h-full`}>
            <CashFlow />
          </div>
          <div className={`${cardStyle} lg:col-span-4 h-full`}>
            <div className="flex flex-col h-full">
              <div className="mb-4 text-left">
                <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Pendências</h2>
                <p className="text-xs text-gray-500 dark:text-gray-400">Próximas 10 entradas e saídas pendentes</p>
              </div>
              
              <div className="space-y-0 flex-grow">
                <div className="py-3 border-b border-gray-100 dark:border-gray-700">
                  <div className="text-left">
                    <div className="mb-1">
                      <span className="text-sm font-medium text-amber-500">Entrada</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300">- Cliente</span>
                    </div>
                    <span className="text-xl font-semibold text-gray-800 dark:text-white">R$ 20.000</span>
                  </div>
                </div>
                
                <div className="py-3 border-b border-gray-100 dark:border-gray-700">
                  <div className="text-left">
                    <div className="mb-1">
                      <span className="text-sm font-medium text-amber-500">Entrada</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300">- Cliente</span>
                    </div>
                    <span className="text-xl font-semibold text-gray-800 dark:text-white">R$ 20.000</span>
                  </div>
                </div>
                
                <div className="py-3 border-b border-gray-100 dark:border-gray-700">
                  <div className="text-left">
                    <div className="mb-1">
                      <span className="text-sm font-medium text-amber-500">Saída</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300">- Fornecedor</span>
                    </div>
                    <span className="text-xl font-semibold text-gray-800 dark:text-white">R$ 20.000</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center py-3">
                <span className="text-sm font-semibold text-gray-900 dark:text-white">Saldo Total:</span>
                <span className="text-amber-500 font-semibold">R$ 20.000</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;