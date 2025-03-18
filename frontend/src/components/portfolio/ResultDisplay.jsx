
const AllocationResults = ({ allocation }) => {
  const total = allocation.bonds + allocation.stocks + allocation.cash || 1; 

  return (
    <div className="mt-7 mx-6">
    <div className="bg-white border shadow-md rounded-lg p-6 mt-6">
      <h2 className="text-lg font-semibold mb-6 border-b-2">Allocation Results</h2>

      
      <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-5 rounded-lg shadow-md mb-4">
        <h3 className="text-blue-800 font-semibold text-md">Bonds</h3>
        <p className="text-3xl font-bold text-blue-800">${allocation.bonds}</p>
        <p className="text-blue-800 text-sm">
          {((allocation.bonds / total) * 100).toFixed(1)}% of portfolio
        </p>
      </div>

      <div className="bg-gradient-to-r from-cyan-100 to-cyan-50 p-5 rounded-lg shadow-md mb-4">
        <h3 className="text-cyan-600 font-semibold text-md">Stocks</h3>
        <p className="text-3xl font-bold text-cyan-600">${allocation.stocks}</p>
        <p className="text-cyan-600 text-sm">
          {((allocation.stocks / total) * 100).toFixed(1)}% of portfolio
        </p>
      </div>

      
      <div className="bg-gradient-to-r from-blue-200 to-blue-100 p-5 rounded-lg shadow-md">
        <h3 className="text-blue-700 font-semibold text-md">Cash</h3>
        <p className="text-3xl font-bold text-blue-700">${allocation.cash}</p>
        <p className="text-blue-700 text-sm">
          {((allocation.cash / total) * 100).toFixed(1)}% of portfolio
        </p>
      </div>
    </div>
    </div>
  );
};

export default AllocationResults;
