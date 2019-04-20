import React from 'react';
import axios from 'axios';
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
            name: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        axios
            .post('https://mtnbe.herokuapp.com/api/categories/moviesDB', {name: this.state.name},
            {
            "Content-Type": "application/json",
            headers: { authorization: localStorage.getItem("token")
            }
            })
            .then(response => {this.setState({
                name: '', movieAdded: response.data.message, 
                }) 
            })
    }

    render() {
        return (
            <div className='cat'>
                <h2>Movie Additions</h2>
                <Form onSubmit={this.handleSubmit}>
                    <Col>
                    <p>{this.state.movieAdded && <div>Movie Added</div>}</p>
                    <FormGroup>
                        <Input 
                            type='text'
                            placeholder='Name'
                            onChange={this.handleName}
                            value={this.state.name}
                        />
                    </FormGroup>
                    <Button>Add</Button>
                    </Col>
                </Form>
            </div>
        )
    }
}

export default Movies;