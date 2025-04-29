export default function Home() {
  return (
    <main className="pt-24 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Cards de estatísticas */}
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Estatística {item}</h2>
              <p className="text-4xl font-bold text-blue-600">128</p>
              <p className="text-gray-500 mt-2">Crescimento de 12% em relação ao mês anterior</p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Atividades Recentes</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="border-b pb-4">
                <p className="font-medium">Atividade {item}</p>
                <p className="text-gray-500 text-sm">Há 2 horas atrás</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 