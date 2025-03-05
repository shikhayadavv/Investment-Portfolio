import { ChartNoAxesColumnDecreasing, Network, Wifi } from "lucide-react";

const StrategySelector = ({strategy, setStrategy}) => {
    
  
    const handleStrategyChange = (event) => {
      setStrategy(event.target.value);
    };
  
    return (
        <div className="mt-7 mx-6">
            <div className="bg-white border shadow-md rounded-lg p-6">
                <h2 className=" flex flex-row gap-2 text-lg font-semibold mb-6 border-b-2"> <ChartNoAxesColumnDecreasing className="text-blue-700" />Investment Strategy</h2>
                <select 
                className="w-full p-2 border rounded" 
                value={strategy} 
                defaultValue=""
                onChange={handleStrategyChange}
                >
                
                <option value="">Select Strategy</option>
                <option value="conservative">Conservative</option>
                <option value="moderate">Moderate</option>
                <option value="aggressive">Aggressive</option>
                </select>
                <div className="border border-gray-300 bg-gray-200 rounded-lg p-4 mt-4 shadow-sm">

                    <h2 className="text-lg font-semibold text-blue-800 mb-2">Strategy Details</h2>
                    <p className="text-sm text-blue-700">
                        {strategy ? `You have selected: ${strategy}` : "Select a strategy to see recommended allocations."}
                    </p>
                </div>

            </div>
      </div>
    );
  };
  
  export default StrategySelector;