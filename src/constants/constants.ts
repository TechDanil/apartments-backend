import IApartment from "../interfaces/apartmentInterfaces/IApartment.interface";

const VALID_SORT_FIELDS: (keyof IApartment)[] = [
    "rooms",
    "floor",
    "price",
    "area_total",
    "area_live",
    "area_kitchen",
];

export { VALID_SORT_FIELDS };