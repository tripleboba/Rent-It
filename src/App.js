import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// components
import Header from "./components/Header";
import Home from './components/Home';
import OnRenting from "./components/OnRenting";
// stylesheet
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <Router>
        <Routes>
          <Route path="/" 
            element={<Home/>}
          />
          <Route path="/renting"
            element={<OnRenting />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
