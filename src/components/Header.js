import { React } from 'react'
import { useStateValue } from '../providers/StateProvider'
// import logo from '../styles/logo.png'

export default function Header() {
  // for count on-renting items when 'rent now' button is clicked
  const [{rentingBasket}, dispatch] = useStateValue();
  const formatItemsCounter = items => {
    if (items === 0) return '';
    else if (items === 1) return "(1 item)";
    else return `(${items} items)`;
  }

  return (

      <nav className="navbar" role="navigation" aria-label="main navigation">
        
        <div className="navbar-brand">
          {/* <a  className="navbar-item" href="/">RENT IT</a> */}
          {/* <div className="navbar-item"> */}
            <a  className="navbar-item"
                href="/">
                {/* <img src={logo} alt="logo" width="auto" height="100%"/> */}
                <strong>RENT IT</strong>
            </a>
          {/* </div> */}
        </div>
        
        <div className="navbar-end">
          {/* <div className="navbar-item"> */}
            <a  className="navbar-item"
                href="/renting"> On Renting {formatItemsCounter(rentingBasket.length)} </a>
            <a  className="navbar-item"
                href="/rented"> Rented History </a>
            <div className="navbar-item"> Signup/Login </div>
          {/* </div> */}
        </div>

      </nav>

  )
}
