// import { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// components
import Header from "./components/Header";
import ItemsList from './components/ItemsList';
import OnRenting from "./components/OnRenting";
import ItemBooking from "./components/ItemBooking";
import RentedHistory from "./components/RentedHistory";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
// stylesheet
import './styles/App.css';
// data
import { useStateValue } from "./providers/StateProvider";
import Item from "./components/Item";


export default function App(){
  // class App extends Component {
    //   constructor(props) {
      //     super(props);
      //     this.state = {
        //       user: null,
        //       cart: {},
        //       products: []
        //     };
        //     this.routerRef = React.createRef();
        //   }
        //   render() {

    const [{allItems}] = useStateValue();
    // load APIs - stripe payment
    const promise = loadStripe('pk_test_51Kj81IDO2pwKOTXuZX377on83fmKsGhg31ac68LW8hfmHxUYAPTjLfdeexzBHskCeae0Rwcu0BY8AgbQmtbdwqxF00mszS5PKT');
          
    return (
        <div className="App">
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<ItemsList items={allItems}/>} />
              <Route path="/renting" element={<OnRenting />} />
              <Route path="/items/:id" element={
                  <Elements stripe={promise}>
                    <ItemBooking />
                  </Elements>
                }/>
              <Route path="/rented" element={<RentedHistory />} />
            </Routes>
          </Router>
        </div>
    );
  }

