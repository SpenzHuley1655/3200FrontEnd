import React from 'react'
import {Link} from "react-router-dom";

export default class Navbar extends React.Component {

    render() {
        return (
            <header className="navbar navbar-expand">
            <h1>
            <Link className="navbar-brand  mr-md-2" to="/">3200 Final</Link>
            </h1>
            <div className="col-10 float-right mx-auto d-none d-md-inline">
              <ul className="nav navbar-collapse">
                <li className="nav-item mt-2 ml-auto">
                  <h5>
                    <Link to="/create/">Create, </Link>
                    <Link to="/edit"> Edit,  </Link>
                    or
                    <Link to="/read/"> View  </Link>
                    reviews
                  </h5>
                </li>
              </ul>
            </div>
        </header>
    )
    }
}
