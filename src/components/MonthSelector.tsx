import { ChevronLeft, ChevronRight } from 'lucide-react';

type MonthSelectorProps = {
  currentMonth: string;
  onSelectMonth: (month: string) => void;
};

const MonthSelector = ({ currentMonth, onSelectMonth }: MonthSelectorProps) => {
  const months = [
    { abbr: 'Jan', value: 'Jan', num: '25' },
    { abbr: 'Fev', value: 'Fev', num: '25' },
    { abbr: 'Mar', value: 'Mar', num: '25' },
    { abbr: 'Abr', value: 'Abr', num: '25' },
    { abbr: 'Mai', value: 'Mai', num: '25' },
    { abbr: 'Jun', value: 'Jun', num: '25' },
    { abbr: 'Jul', value: 'Jul', num: '25' },
    { abbr: 'Ago', value: 'Ago', num: '25' },
    { abbr: 'Set', value: 'Set', num: '25' },
    { abbr: 'Out', value: 'Out', num: '25' },
    { abbr: 'Nov', value: 'Nov', num: '25' },
    { abbr: 'Dez', value: 'Dez', num: '25' },
  ];

  // Mostrar apenas os meses visíveis na interface (7 meses)
  const visibleMonths = months.slice(0, 7);

  return (
    <div className="flex items-center justify-center px-4 my-6">
      <button className="p-2 rounded-full hover:bg-gray-100 flex-shrink-0 text-gray-700 mr-2">
        <ChevronLeft className="h-6 w-6" strokeWidth={1.5} />
      </button>
      
      <div className="flex items-center justify-center gap-5 overflow-x-auto px-3 py-2">
        {visibleMonths.map((month) => (
          <button
            key={month.abbr}
            onClick={() => onSelectMonth(month.abbr)}
            className={`min-w-[85px] h-[60px] rounded-xl flex flex-col items-center justify-center font-medium transition-colors duration-200 ${
              currentMonth === month.abbr
                ? "bg-zinc-900 text-white"
                : "bg-white hover:bg-gray-50 text-gray-800 border border-gray-200"
            }`}
          >
            <span className="text-base">{month.value}</span>
            <span className={`text-sm ${currentMonth === month.abbr ? "text-gray-300" : "text-gray-500"}`}>{month.num}</span>
          </button>
        ))}
      </div>
      
      <button className="p-2 rounded-full hover:bg-gray-100 flex-shrink-0 text-gray-700 ml-2">
        <ChevronRight className="h-6 w-6" strokeWidth={1.5} />
      </button>
    </div>
  );
};

export default MonthSelector;