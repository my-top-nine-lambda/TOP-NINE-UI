import React from 'react';
import './App.css';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';

import Login from './components/Login';
import Signup from './components/Signup';
import Home from './Home';
import Movies from './pages/Movies';
import Edit from './components/Edit';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  register = creds => {
    axios
      .post('https://mtnbe.herokuapp.com/api/auth/register', creds)
      .then(response => {
        console.log(response)
      })
      .catch(error => console.log(error));
  };


  render() {
    return (
      <div className="App">
        <Navbar>
          <NavbarBrand>Top Nine</NavbarBrand>
           <Nav>
             <NavItem>
               <NavLink href='/'>Login</NavLink>
             </NavItem>
             <NavItem>
               <NavLink href='/home'>Home</NavLink>
             </NavItem>
             <NavItem>
               <NavLink href='/movie'>Add</NavLink>
             </NavItem>
           </Nav>
        </Navbar>

        <Route exact path='/' render={props => <Login {...props} login={this.login} />} />
        <Route path='/register' render={props => <Signup {...props} register={this.register}/>} />
        <Route path='/home' render={props => <Home {...props} postItem={this.postItem}/>} />
        <Route path='/movie' component={Movies} />
        <Route path='/edit/:id' component={Edit} />
      </div>
    );
  }
}

export default App;