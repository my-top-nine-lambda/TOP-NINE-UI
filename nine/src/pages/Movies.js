import React from 'react';
import axios from 'axios';
import ProfileCard from './ProfileCard';
import { Form, FormGroup, Input, Button, Col } from 'reactstrap';

class Movies extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            movieAdded: ''
        }
    }

    handleName = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        
        axios
            .post('https://mtnbe.herokuapp.com/api/categories/moviesDB', {name: this.state.name},
            {"Content-Type": "application/json",
            headers: { authorization: localStorage.getItem("token")
            }})
            .then(response => {this.setState({
                movieAdded: response.data.message, name: ''
                
            }) }
            )
    }



    updateItem = id => {
        axios
          .put(`https://mtnbe.herokuapp.com/api/categories/movies/${id}`)
          .then(response => {
           console.log(response)
          })
          .catch(error => {
            console.log(error);
          });
    };

    render() {
        return (
            <div className='cat'>
                <Form onSubmit={this.handleSubmit}>
                    <Col>
                    <p>{this.state.movieAdded && <div>Movie Added</div>}</p>
                    <FormGroup>
                        <Input 
                            type='text'
                            placeholder='Name'
                            onChange={this.handleName}
                        />
                    </FormGroup>
                    <Button>Add</Button>
                    </Col>
                </Form>

                <h2>My Top Nine</h2>
            </div>
        )
    }
}

export default Movies;
