import React from 'react';
import axios from 'axios';
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

class Login extends React.Component {
    state = {
        user: {
        username: '',
        password: ''
        }
    }

   
  login = user => {
    axios
      .post('https://mtnbe.herokuapp.com/api/auth/login', user)
      .then(response => {
        console.log(user)
        localStorage.setItem("token", response.data)
      })
      .catch(error => console.log(error));
  };
    
    handleChange = e => {
        console.log(e)
        this.setState({ 
            user: {
                ...this.state.user,
                [e.target.name]: e.target.value
            }
        })
    }
    
    login = e => {
        e.preventDefault();
        this.props.login(this.state.user);

        this.props.history.push('/home')
    }
    render() {
        return (
            <Container className='login'>
                <h2>Top Nine</h2>
                <Form className='form' onSubmit={this.login}>
                 <Col>
                 <FormGroup>
                     <Label>Username</Label>
                     <Input 
                        type='username'
                        name='username'
                        placeholder='username'
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                 </FormGroup>
                 </Col>
                 <Col>
                    <FormGroup>
                        <Label for='password'>Password</Label>
                        <Input
                            type='password'
                            name='password'
                            placeholder='password'
                            value={this.state.password}
                            onChange={this.handleChange}
                         />
                    </FormGroup>
                 </Col>
                  <Button onClick={this.login}>Login</Button>
                  <Button><a href='/register'>Register</a></Button>
                </Form>
            </Container>
        )
    }
}

export default Login;