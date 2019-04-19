import React from 'react';
import axios from 'axios';
import ProfileCard from './ProfileCard';
import { Form, FormGroup, Input, Button, Col } from 'reactstrap';

class Movies extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            type: '',
            description: '',
            id: '',
            movies: []
        }
    }

    handleName = e => {
        this.setState({
            name: e.target.value
        })
    }
    handleType = e => {
        this.setState({
            type: e.target.value
        })
    }
    handleDescription = e => {
        this.setState({
            description: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        axios
            .post('https://mtnbe.herokuapp.com/api/categories/moviesDB', {name: this.state.name, type: this.state.type, description: this.state.description, id: this.state.id})
            .then(response => this.setState({
                movies: [this.state.name, this.state.type, this.state.description, this.state.id]
            }))
    }

    deleteItem = id => {
        axios
          .delete(`https://mtnbe.herokuapp.com/api/categories/moviesDB/${id}`)
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            console.log(error);
          });
    };

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
                    <FormGroup>
                        <Input 
                            type='text'
                            placeholder='Name'
                            onChange={this.handleName}
                        />
                        <Input 
                            type='text'
                            placeholder='Type'
                            onChange={this.handleType}
                        />
                        <Input 
                            type='text'
                            placeholder='Description'
                            onChange={this.handleDescription}
                        />
                    </FormGroup>
                    <Button>Add</Button>
                    </Col>
                </Form>

                <h2>My Top Nine</h2>
                {this.state.movies.map(movie => (
                <ProfileCard key={movie} deleteItem={this.deleteItem}/>
                ))}
            </div>
        )
    }
}

export default Movies;
