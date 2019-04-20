import React from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            items: [],
         }
    }

    componentDidMount() {
        axios
            .get('https://mtnbe.herokuapp.com/api/categories/moviesDB', {
                "Content-Type": "application/json",
                headers: { authorization: localStorage.getItem("token") }
            })
            .then(response => {
                console.log(response)
                this.setState({
                    items: response.data
                  })
                })
            .catch(error => {
                console.log(error);
            });
    }  

    delete = (id) => {
        let items = this.state.items;
        items = items.filter(item => item.id !== id)
        this.setState({
            items
        })
    }
  
    render() { 
        const {items} = this.state;
        return ( 
            <div>
                <h1>Top Nine</h1>
                {items.map(item => {
                    return (
                    <div>
                        <h3 key={item.id}>{item.name}</h3>
                        <Button href={`/edit/${item.id}`}>Edit</Button>
                        <Button onClick={() => this.delete(item.id)}>Delete</Button>
                    </div>
                    )
                })}
            </div>
         );
    }
}
 
export default Home;