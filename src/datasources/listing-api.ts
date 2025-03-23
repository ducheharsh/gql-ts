import { RESTDataSource } from "@apollo/datasource-rest";
import { Amenities, Listing } from "../types";

export class ListingAPI extends RESTDataSource {

    baseURL = "https://rt-airlock-services-listing.herokuapp.com/";

    getFeaturedListings() {
        return this.get<Listing[]>("featured-listings")
    }

    getListingById(id: string):Promise<Listing> {
        return this.get<Listing>(`listings/${id}`)
    }

    getAmenitiesById(id: string):Promise<Amenities[]> {
        console.log("Making a follow-up call for amenities with ", id);
        return this.get<Amenities[]>(`listings/${id}/amenities`)
    }
}
