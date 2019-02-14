import React from 'react';
import SearchBar from './SearchBar';


import axios from '../api/unsplashservices';
import ImageList from './ImageList';


class App extends React.Component {

    state = { images : []};
    /*
    example of how to use promise.then
    onSearchSubmit = (term) => {
        axios.get('https://api.unsplash.com/search/photos',{
            params:{
                query: term
            },
            headers:{
                Authorization: 'Client-ID 0557ab42c6e34431e3007187089b49a053a9885d1868425c048a3f6b92ff3038'
            }
        }).then((response) => {console.log(response.data.results)})
    }*/

     onSearchSubmit = async (term) => {
       const response =  await axios.get('search/photos',{
            params:{
                query: term
            }
        });
         this.setState({images: response.data.results});
    };

    render(){
        return (
            <div className='ui container' style={{ marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images} />
            </div>
        )
    }
}


export default App;
