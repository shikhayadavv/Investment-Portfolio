import React, { useState } from "react";
import TopBar from "../components/UI/TobBar";
import StrategySelector from "../components/portfolio/StrategySelector";
import PortfolioAllocation from "../components/portfolio/AllocationForm";
import AllocationResults from "../components/portfolio/ResultDisplay";
import HistoricalPerformance from "../components/charts/AreaCharts";

const Home = () => {
  const [strategy, setStrategy] = useState("");
  const [allocation, setAllocation] = useState({
    amount: "",
    bonds: "",
    stocks: "",
    cash: "",
  });
  return (
    <div>
      <TopBar />
      <StrategySelector strategy={strategy} setStrategy={setStrategy} />
      <PortfolioAllocation strategy={strategy} setStrategy={setStrategy} allocation={allocation} setAllocation={setAllocation} />
      <HistoricalPerformance/>
      <AllocationResults allocation={allocation}/>
    </div>
  );
};

export default Home;


