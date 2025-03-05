import { DollarSign } from "lucide-react";
import { useState } from "react";
import { STRATEGIES } from "../../utils/strategies";
import { validationRules } from "../../utils/validation";
import PieCharts from "../charts/PieCharts";

const PortfolioAllocation = ({
  strategy,
  setStrategy,
  allocation,
  setAllocation,
}) => {
  const [error, setError] = useState("");
  const [showChart, setShowChart] = useState(false);

  const handleChange = (event) => {
    setAllocation({ ...allocation, [event.target.name]: event.target.value });
  };

  const validateAllocation = () => {
    setError(""); 

    if (!strategy) {
      setError("Please select a strategy.");
      return;
    }

    const validAmount = validationRules.amount;
    const amount = Number(allocation.amount);
    if (amount < validAmount.min || amount > validAmount.max) {
      setError(validAmount.message);
      return;
    }

    const bonds = Number(allocation.bonds) || 0;
    const stocks = Number(allocation.stocks) || 0;
    const cash = Number(allocation.cash) || 0;

    const total = bonds + stocks + cash;
    if (total !== validationRules.allocation.totalPercentage) {
      setError(validationRules.allocation.message);
      return;
    }

    const selectedStrategy = STRATEGIES[strategy];
    const isValid =
      allocation.bonds >= selectedStrategy.bonds.min &&
      allocation.bonds <= selectedStrategy.bonds.max &&
      allocation.stocks >= selectedStrategy.stocks.min &&
      allocation.stocks <= selectedStrategy.stocks.max &&
      allocation.cash >= selectedStrategy.cash.min &&
      allocation.cash <= selectedStrategy.cash.max;

    setError(
      isValid ? "" : "Your allocation does not match the selected strategy."
    );
    setShowChart(true);
  };

  const resetForm = () => {
    setAllocation({ amount: "", bonds: "", stocks: "", cash: "" });
    setStrategy("");
    setError("");
  };

  const pieChartData = [
    { asset: "Bonds", value: Number(allocation.bonds), color: "#1E3A8A" },
    { asset: "Stocks", value: Number(allocation.stocks), color: "#38BDF8" },
    { asset: "Cash", value: Number(allocation.cash), color: "#3B82F6" },
  ];

  return (
    <div className="mt-7 mx-6">
      <div className="bg-white shadow-md border rounded-lg p-6 mt-6">
        <h2 className="text-lg flex flex-row gap-1 font-semibold mb-6 border-b-2">
          <DollarSign className="text-blue-700" /> Portfolio Allocation
        </h2>

        <h3 className="text-gray-600 mb-1">Investment Amount</h3>
        <input
          type="number"
          name="amount"
          placeholder="Enter amount"
          className="w-full p-2 border rounded mb-3"
          value={allocation.amount}
          onChange={handleChange}
        />

        <h3 className="text-gray-600 mb-1">Bonds (%)</h3>
        <input
          type="number"
          name="bonds"
          placeholder={
            strategy === "conservative"
              ? "Enter value between 60-80"
              : strategy === "moderate"
              ? "Enter value between 40-50"
              : strategy === "aggressive"
              ? "Enter value between 20-30"
              : "0"
          }
          className="w-full p-2 border rounded mb-3"
          value={allocation.bonds}
          onChange={handleChange}
        />

        <h3 className="text-gray-600 mb-1">Stocks (%)</h3>
        <input
          type="number"
          name="stocks"
          placeholder={
            strategy === "conservative"
              ? "Enter value between 20-30"
              : strategy === "moderate"
              ? "Enter value between 40-50"
              : strategy === "aggressive"
              ? "Enter value between 60-70"
              : "0"
          }
          className="w-full p-2 border rounded mb-2"
          value={allocation.stocks}
          onChange={handleChange}
        />

        <h3 className="text-gray-600 mb-1">Cash (%)</h3>
        <input
          type="number"
          name="cash"
          placeholder={
            strategy === "conservative"
              ? "Enter value between 5-10"
              : strategy === "moderate"
              ? "Enter value between 5-15"
              : strategy === "aggressive"
              ? "Enter value between 5-10"
              : "0"
          }
          className="w-full p-2 border rounded mb-2"
          value={allocation.cash}
          onChange={handleChange}
        />

        <p className="text-sm border border-cyan-400 font-semibold p-4 rounded bg-gray-200 mt-2">
          Total allocation:{" "}
          {Number(allocation.bonds) +
            Number(allocation.stocks) +
            Number(allocation.cash)}
          % (must equal 100%)
        </p>

        {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}

        <div className="flex flex-row gap-3">
          <button
            className="w-full mt-4 p-2 bg-black text-white rounded"
            onClick={validateAllocation}
          >
            Calculate
          </button>
          <button
            className="w-full mt-4 p-2 border text-blue-700 rounded"
            onClick={resetForm}
          >
            Reset
          </button>
        </div>

        {showChart && !error && (
          <div className="mt-6 border rounded-md bg-gray-200 flex justify-center">
            <PieCharts data={pieChartData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioAllocation;
