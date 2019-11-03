const apiKey="r3820mxG1CjU_O-DqBXvqrZoZjN_gh5lrAPCBzR0_dypASw4S7vgZ8aRIlEZrV_wDJwccLrHFEw9zYru6JeBmZtvk-yDsve4t0cgfrrYZRxqfRXQwLo8COY-bFqUXXYx";

const yelp={
     search(term, location, sortBy){

         return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
             {
                 headers: {
                     Authorization: `Bearer ${apiKey}`,
                 }
             }
         ).then(response=>{
             return response.json();

         }).then(jsonResponse=>{
             if(jsonResponse.businesses){
                 return jsonResponse.businesses.map(business=>{
                     console.log("Results:"+ jsonResponse.total)
                     return ({
                         id: business.id,
                         imageSrc: business.image_url,
                         name:business.name,
                         address:business.location.address1,
                         city:business.location.city,
                         state:business.location.state,
                         zipCode:business.location.zip_code,
                         category:business.categories[0].title,
                         rating:business.rating,
                         reviewCount:business.review_count,
                     });
                 });
             }

         });
     }

};
export default yelp;
