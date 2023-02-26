import "./App.css";
import Header from "./components/Header";
import Graph from "./components/Graph";
import Form from "./components/Form";
import { GlobalProvider } from "./context/GlobalState";
import IncomeExpenses from "./components/IncomeExpenses";
import History from "./components/History";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
        {/* division of graph and content */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* graph */}
          <Graph />
          {/* content */}
          <Form />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
