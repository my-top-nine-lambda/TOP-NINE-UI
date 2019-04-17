import React from 'react';
import axios from 'axios';

import Books from './pages/Books';
import Movies from './pages/Movies';
import Sports from './pages/Sports';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            items: ['Red', 'Incredibles', 'IT', 'Incredibles', 'Superman', 'Dark Knight', 'Training Day', '007', 'X-Men'],
         }
    }

    addMovie = e => {
        e.preventDefault();
        const newItem = {
            items: this.state.items
        }

        this.props.postItem(newItem);
        this.setState({
            items: ['Red', 'Incredibles', 'IT', 'Incredibles', 'Superman', 'Dark Knight', 'Training Day', '007', 'X-Men']
        })
    }

    componentDidMount() {
        axios
            .get('https://mtnbe.herokuapp.com/api/categories/moviesDB')
            .then(response => {
                this.setState({
                    items: response.data
                  })
                })
            .catch(error => {
                console.log(error);
            });
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

    deleteItem = id => {
        
        axios
          .delete(`https://mtnbe.herokuapp.com/api/categories/moviesDB/${id}`)
          .then(response => {
        
          })
          .catch(error => {
            console.log(error);
          });
    };

    render() { 
        const {items} = this.state;
        return ( 
            <>
            <form onSubmit={this.addMovie}>
                <div>
                    <input 
                        type='text'
                        placeholder='Item'
                        />
                </div>
                <button>Add</button>
            </form>
            <div>
                <h1>My Top Nine</h1>
                {items.map(item => {
                    return <p key={item}>{item}</p>
                })}
            </div>
            </>
         );
    }
}
 
export default Home;