import "./App.css";
import Graph from "./components/Graph";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
        <h1 className="text-4xl py-4 mb-10 bg-slate-800 text-white rounded">
          Expense Tracker
        </h1>
        {/* division of graph and content */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* graph */}
          <Graph />
          {/* content */}
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
