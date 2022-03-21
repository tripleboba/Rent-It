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
  {id: 1, title:"shoe", description:"shoe is for renting",isRenting:false, image:"https://i.redd.it/1pmsjnk8f1g01.jpg"},
  {id: 2, title:"book", description:"book is for renting", isRenting:false, image:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2015%2F04%2F05%2Ffeatured.jpg&q=60"},
  {id: 3, title:"bottle", description:"bottle is for renting", isRenting:true, image:"https://lh3.googleusercontent.com/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc=w600"},
  {id: 4, title:"table", description:"table is for renting", isRenting:false, image:"http://www.dumpaday.com/wp-content/uploads/2020/06/00-57-750x280.jpg"}
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
