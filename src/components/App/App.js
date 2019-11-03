import React,{Component} from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar.js'
import BusinessList from "../BusinessList/BusinessList";
import  yelp from '../../util/Yelp'


class App extends Component{
    constructor(props){
        super(props);

        this.state={
            businesses:[]
        }

        this.searchYelp=this.searchYelp.bind(this);
    }

    searchYelp( term, location, sortBy){
        yelp.search(term, location,sortBy).then(businesses=>{
            this.setState({businesses:businesses})
        });
    }
    render() {
        return (
            <div className="App">
                <h1>ravenous</h1>
                <SearchBar search={this.searchYelp}/>
                <BusinessList businesses={this.state.businesses} />
            </div>
        );
    }
}

export default App;
