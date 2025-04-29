import { useState } from 'react';

const PendingTransactions = () => {
  const [activeTab, setActiveTab] = useState('pagar');
  
  const transactions = [
    {
      id: 1,
      type: 'entrada',
      name: 'Cliente (20/02)',
      amount: 20000,
      currency: 'R$',
    },
    {
      id: 2,
      type: 'entrada',
      name: 'Cliente (20/02)',
      amount: 20000,
      currency: 'R$',
    },
    {
      id: 3,
      type: 'saida',
      name: 'Fornecedor (20/02)',
      amount: 10000,
      currency: 'R$',
    },
  ];

  const totalAmount = 30000;

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-start justify-between mb-2">
        <div className="text-left">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Para acontecer</h2>
          <p className="text-xs text-gray-500 dark:text-gray-400">Próximas 10 entradas e saídas</p>
        </div>
        <div className="flex text-xs gap-1">
          <button 
            className={`px-2 py-1 rounded-md font-medium transition-colors
              ${activeTab === 'pagar' 
                ? 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white' 
                : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            onClick={() => setActiveTab('pagar')}
          >
            A pagar
          </button>
          <button 
            className={`px-2 py-1 rounded-md font-medium transition-colors
              ${activeTab === 'receber' 
                ? 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white' 
                : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            onClick={() => setActiveTab('receber')}
          >
            A receber
          </button>
        </div>
      </div>

      <div className="flex-grow">
        {transactions.map(transaction => (
          <div key={transaction.id} className="py-3 border-b border-gray-100 dark:border-gray-700">
            <div className="text-left">
              <div className="mb-1">
                <span className={`text-sm font-medium ${transaction.type === 'entrada' ? 'text-emerald-500' : 'text-rose-500'}`}>
                  {transaction.type === 'entrada' ? 'Entrada' : 'Saída'}
                </span>
                <span className="text-sm text-gray-700 dark:text-gray-300">- {transaction.name}</span>
              </div>
              <span className="text-xl font-semibold text-gray-800 dark:text-white">
                R$ {transaction.amount.toLocaleString('pt-BR')}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center py-3">
        <span className="text-sm font-semibold text-gray-900 dark:text-white">Saldo Total:</span>
        <span className="text-emerald-500 font-semibold">
          R$ {totalAmount.toLocaleString('pt-BR')}
        </span>
      </div>
    </div>
  );
};

export default PendingTransactions;