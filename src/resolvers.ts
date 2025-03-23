import { validateFullAmenities } from "./helpers";
import { Resolvers } from "./types";

export const resolvers:Resolvers = {
    Query:{
        featuredListings: (_, __, {dataSources}) => {
            return dataSources.listingAPI.getFeaturedListings();
        },
        listing:(_, {id}, {dataSources}) => {
            return dataSources.listingAPI.getListingById(id);
        }
    },
    Listing:{
        amenities:({id, amenities}, _, {dataSources})=>{
            return validateFullAmenities(amenities) ? amenities : dataSources.listingAPI.getAmenitiesById(id);
        }
    },
    Mutation:{
        createListing:async(_, {input}, {dataSources})=>{
            try{
             const response = await dataSources.listingAPI.createListing(input);
             console.log(response);
             return{
                code:200,
                success:true,
                message:"Listing created successfully",
                listing:response
             }
            }catch(err){
                console.log(err);
                return{
                    code:500,
                    success:false,
                    message:`Failed to create listing: ${err.extensions.response.body}`,
                }
            }
        }
    }
};