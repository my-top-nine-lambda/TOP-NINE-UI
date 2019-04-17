import React from 'react';
import './App.css';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';

import Login from './components/Login';
import Signup from './components/Signup';
import Home from './Home';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  login = user => {
    axios
      .post('https://mtnbe.herokuapp.com/api/auth/login', user)
      .then(response => {
        localStorage.setItem("token", response.data);
      })
      .catch(error => console.log(error));
  };

  register = creds => {
    axios
      .post("https://mtnbe.herokuapp.com/api/auth/register", creds)
      .then(response => {
        console.log(response)
      })
      .catch(error => console.log(error));
  };

  postItem = (item) => {
    axios
    .post('https://mtnbe.herokuapp.com/api/categories/moviesDB', item)
    .then( response => {
      console.log(response)
      this.setState({
        item: response.data
      });
    })
    .catch(error => console.log(error))
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
           </Nav>
        </Navbar>

        <Route exact path='/' render={props => <Login {...props} login={this.login}/>} />
        <Route path='/register' render={props => <Signup {...props} register={this.register}/>} />
        <Route path='/home' render={props => <Home {...props} postItem={this.postItem}/>} />
      </div>
    );
  }
}

export default App;