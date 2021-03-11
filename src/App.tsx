import './App.scss';
import ProductsPage from './components/products/ProductsPage';
import { BrowserRouter as Router } from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="App">
        <ProductsPage />
      </div>
    </Router>
  );
}

export default App;
