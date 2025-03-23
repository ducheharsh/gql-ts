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
    }
};