import React from 'react';
import axios from 'axios';
import { Button, Col, Form, Input } from 'reactstrap';

class Edit extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            name: ''
        };
    }
    updateInput = e => {
        this.setState({
           name: e.target.value
        });
    }

    updateItem = (e, id) => {
        e.preventDefault();
        axios
          .put(`https://mtnbe.herokuapp.com/api/categories/moviesDB/${id}`,this.state.name,
          {
            "Content-Type": "application/json",
            headers: { authorization: localStorage.getItem("token")
          }
          })
          .then(response => {
           console.log(response)
          })
          .catch(error => {
            console.log(error);
          });
    };

    render(){
        console.log(this.props)
        return(
            <div>
                <Form onSubmit={(e) => this.updateItem(e, this.props.match.params.id)}>
                    <Col>
                    <Input 
                        type='text'
                        name='edit'
                        placeholder='Edit'
                        value={this.state.name} 
                        onChange={this.updateInput}
                    /> 
                    <Button type='submit'>edit</Button>
                    </Col>
                </Form>
            </div>
        );
    }
}

export default Edit;