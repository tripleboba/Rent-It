import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// components
import Header from "./components/Header";
import Item from "./components/Item";
import ItemsList from './components/ItemsList';
import OnRenting from "./components/OnRenting";
import RentedHistory from "./components/RentedHistory";
// stylesheet
import './styles/App.css';

function App() {
  return (
    // <div className="section">
    //   <div className="container">
    //     <h1 className="title"> Hello World </h1>
    //     <p className="subtitle">
    //       My React app  with <strong>Bulma</strong>
    //     </p>
    //   </div>
    // </div>
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<ItemsList />} />
          <Route path="/renting" element={<OnRenting />} />
          <Route path="/rented" element={<RentedHistory />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
