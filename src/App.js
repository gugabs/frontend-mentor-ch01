import "./style.css";

import Card from "./components/Card";

export default function App() {
  return (
    <div className="App">
      <Card
        title={"Equilibrium #3429"}
        description={"Our Equilibrium collection promotes balance and calm."}
        quantity={"0.041 ETH"}
        daysLeft={"3 days left."}
        author={"Jules Wyvern"}
      />
    </div>
  );
}
