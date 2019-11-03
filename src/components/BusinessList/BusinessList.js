import React, { Component } from 'react';
import './BusinessList.css'

import '../Business/Business'
import Business from "../Business/Business";

class BusinessList extends Component{


    render(){
         let busin;
         if (this.props.businesses){
         busin = this.props.businesses.map(business=>{
             return <Business business={business} key={business.id} />
         });}
         else{
             busin=<h2 style={{color:"#cca353", fontSize:"1.5em"}}> Sorry, we did not find any business matching your search options. Try again!</h2>
         }
        return (
            <div className="BusinessList">
                {
                    busin
                }
            </div>

        );
    }

}
export default BusinessList;