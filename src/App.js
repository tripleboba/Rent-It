import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// components
import Header from "./components/Header";
import ItemsList from './components/ItemsList';
import OnRenting from "./components/OnRenting";
import RentedHistory from "./components/RentedHistory";
// stylesheet
import './styles/App.css';

// hardcode database
const items = [
  {id: 1, title:"hot pork", description:"a spicy pig that can code",isRenting:false, cost: 12,image:"https://i.pinimg.com/originals/76/ac/74/76ac7443cee64e44a905aafae9fb49dd.gif"},
  {id: 2, title:"demanding cat", description:"eat every 5 minutes", isRenting:false, cost: 5,image:"https://i.pinimg.com/originals/6a/0e/ad/6a0ead42d3907b1310e67c33cb638211.gif"},
  {id: 3, title:"judging monkey", description:"for someone wants judgmental pet", isRenting:true, cost: 20,image:"https://media0.giphy.com/media/cJMlR1SsCSkUjVY3iK/giphy.gif?cid=ecf05e47t053t561jjr34snk2gvgrobziionmb3igwnydwqo&rid=giphy.gif&ct=g"},
  {id: 4, title:"chick tripper", description:"🔞 parental advisory ", isRenting:false, cost: 250,image:"https://media1.giphy.com/media/cQz5MLlnP5rfa/giphy-downsized-large.gif"}
];

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
          <Route path="/" element={<ItemsList items={items}/>} />
          <Route path="/renting" element={<OnRenting />} />
          <Route path="/rented" element={<RentedHistory />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
