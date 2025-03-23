import { Amenities } from "./types"

export const validateFullAmenities = (amenityList: Amenities[]) => amenityList.some(hasOwnPropertyName);

const hasOwnPropertyName = (amenity: Amenities): boolean => "name" in amenity;