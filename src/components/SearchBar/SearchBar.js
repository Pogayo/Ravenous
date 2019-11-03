import React,{Component} from 'react'
import PropTypes from 'prop-types';
import './SearchBar.css'

class SearchBar extends Component{

    constructor(props){
        super(props);

        this.state={ term:'',    //term refers to the search term located in the search input
            location:'', //location refers to the location to search near from the location input
        sortBy:'best_match'//sortBy refers to the selected sorting option

        };
        this.handleTermChange=this.handleTermChange.bind(this);
        this.handleLocationChange=this.handleLocationChange.bind(this);
        this.handleSearch=this.handleSearch.bind(this);


        this.sortByOptions={
            "Best Match":"best_match",
            "Highest Rated":"rating",
            "Most Reviewed":"review_count"

        };
    }

    getSortByClass(sortByOption){
        if(sortByOption===this.state.sortBy){
            return 'active';
        }
        else{
            return '';
        }
    }

    handleSortByChange(sortByOption){
        this.setState({sortBy:sortByOption})
    }

    handleTermChange(e){
        this.setState({term:e.target.value})

    }
    handleLocationChange(e){
        this.setState({location:e.target.value})

    }
    handleSearch(event){
        event.preventDefault()
        this.props.search(this.state.term, this.state.location, this.state.sortBy);
    }
    renderSortByOptions(){
        return (Object.keys(this.sortByOptions).map(sortByOption=>{
                let sortByOptionValue = this.sortByOptions[sortByOption];
               return <li key={sortByOption} className={this.getSortByClass(sortByOptionValue)} onClick={this.handleSortByChange.bind(this,sortByOptionValue)}>{sortByOptionValue}</li>
            }));

    }
 render(){
     return(
         <div className="SearchBar">
             <div className="SearchBar-sort-options">
                 <ul>
                     {this.renderSortByOptions()}
                 </ul>
             </div>
             <div className="SearchBar-fields">
                 <input placeholder="Search Businesses" onChange={this.handleTermChange}/>
                 <input placeholder="Where?" onChange={this.handleLocationChange}/>
             </div>
             <div className="SearchBar-submit">
                 <a onClick={this.handleSearch}>Let's Go</a>
             </div>

     </div>);
 }
}
export default  SearchBar;

SearchBar.propTypes={
    search:PropTypes.func.isRequired,

}