import db from "../../db/models";
import IApartment from "../../interfaces/apartmentInterfaces/IApartment.interface";

const createApartments = (apartments: IApartment[]) => {
    apartments.map(async (apartment) => {
        db.Apartment.create(apartment);
    });
}

export default createApartments;