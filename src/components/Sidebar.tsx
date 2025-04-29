import { 
  BarChart2, 
  Home, 
  FileText,
  Settings, 
  ArrowRightCircle
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <>
      {/* Overlay para dispositivos móveis */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-20 h-screen z-50 transition-all duration-300
        ${isOpen ? 'left-0' : '-left-16 sm:left-0'}
        w-16 bg-zinc-800 text-zinc-400 flex flex-col items-center py-6
      `}>
        <div className="flex flex-col gap-10 mt-6">
          <button className="w-9 h-9 flex items-center justify-center hover:text-white hover:bg-zinc-700 rounded-lg transition-colors">
            <BarChart2 className="h-5 w-5 text-cyan-400" />
          </button>
          <button className="w-9 h-9 flex items-center justify-center hover:text-white hover:bg-zinc-700 rounded-lg transition-colors">
            <FileText className="h-5 w-5 text-zinc-400" />
          </button>
          <button className="w-9 h-9 flex items-center justify-center hover:text-white hover:bg-zinc-700 rounded-lg transition-colors">
            <Home className="h-5 w-5 text-zinc-400" />
          </button>
          <button className="w-9 h-9 flex items-center justify-center hover:text-white hover:bg-zinc-700 rounded-lg transition-colors">
            <Settings className="h-5 w-5 text-zinc-400" />
          </button>
        </div>
        
        <div className="mt-auto mb-6">
          <button 
            className="w-9 h-9 flex items-center justify-center hover:text-white hover:bg-zinc-700 rounded-lg transition-colors"
            onClick={onClose}
          >
            <ArrowRightCircle className="h-5 w-5 text-zinc-400" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;