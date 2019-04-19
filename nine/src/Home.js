import React from 'react';
import axios from 'axios';

import Movies from './pages/Movies';

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

    deleteItem = (e, id) => {
        e.preventDefault();
        axios
          .delete(`https://mtnbe.herokuapp.com/api/categories/moviesDB/${id}`,
          {
            "Content-Type": "application/json",
            headers: { authorization: localStorage.getItem("token")}}
          )
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            console.log(error);
          });
    };

  
    render() { 
        const {items} = this.state;
        return ( 
            <div>
                <h1>Top Nine</h1>
                {items.map(item => {
                    return (
                    <div>
                        <p key={item.id}>{item.name}</p>
                        <button onClick={(e) =>this.deleteItem(e, item.id)}>Delete</button>
                    </div>
                    )
                })}
            </div>
         );
    }
}
 
export default Home;