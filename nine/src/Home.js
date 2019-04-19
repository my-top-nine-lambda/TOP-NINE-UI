import React from 'react';
import axios from 'axios';

import Movies from './pages/Movies';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            items: ['Red', 'Incredibles', 'IT', 'Incredibles', 'Superman', 'Dark Knight', 'Training Day', '007', 'X-Men'],
         }
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
  
    render() { 
        const {items} = this.state;
        return ( 
            <div>
                <h1>Top Nine</h1>
                {items.map(item => {
                    return <p key={item}>{item}</p>
                })}
            </div>
         );
    }
}
 
export default Home;