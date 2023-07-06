import { Request, Response } from "express";
import IApartment from "../interfaces/apartmentInterfaces/IApartment.interface";
import sortItems from "../utils/sortItems/sortItems";
import { VALID_SORT_FIELDS } from "../constants/constants";
import db from "../db/models";

import {
    getFilteredApartmentsByRooms,
    getFilteredApartmentsByAreaKitchen,
    getFilteredApartmentsByAreaLive,
    getFilteredApartmentsByAreaTotal,
    getFilteredApartmentsByFloors,
    getFilteredApartmentsByPrice,
    getApartmentsByFloorPosition
} from "./filters/filters.controller";

const getApartments = async (
    req: Request<{}, {}, {}, { page?: string, limit?: string, filter?: string, sort?: string }>,
    res: Response
): Promise<Response> => {
    try {
        const { page = "1", limit = "8", filter = 'all', sort = 'all' } = req.query;

        const offset = (Number(page) - 1) * Number(limit);

        let apartments: IApartment[] = await db.Apartment.findAll({
            offset,
            limit: Number(limit),
        });


        if (filter !== 'all') {
            const filters = filter.toString().split("|");

            for (const field of filters) {
                const [fieldName, fieldValue] = field.split(":");

                switch (fieldName) {
                    case "rooms":
                        apartments = await getFilteredApartmentsByRooms(
                            apartments,
                            Number(fieldValue)
                        );
                        break;

                    case "floor":
                        apartments = await getFilteredApartmentsByFloors(
                            apartments,
                            Number(fieldValue)
                        );
                        break;

                    case "price":
                        const [startPrice, endPrice] = fieldValue.split("-");
                        apartments = await getFilteredApartmentsByPrice(
                            apartments,
                            Number(startPrice),
                            Number(endPrice)
                        );
                        break;

                    case "area_total":
                        const [startAreaTotal, endAreaTotal] = fieldValue.split("-");
                        apartments = await getFilteredApartmentsByAreaTotal(
                            apartments,
                            Number(startAreaTotal),
                            Number(endAreaTotal)
                        );
                        break;

                    case "area_live":
                        const [startAreaLive, endAreaLive] = fieldValue.split("-");
                        apartments = await getFilteredApartmentsByAreaLive(
                            apartments,
                            Number(startAreaLive),
                            Number(endAreaLive)
                        );
                        break;

                    case "pos_on_floor":
                        apartments = await getApartmentsByFloorPosition(
                            apartments,
                            Number(fieldValue),
                        );
                        break;

                    case "area_kitchen":
                        const [startAreaKitchen, endAreaKitchen] = fieldValue.split("-");
                        apartments = await getFilteredApartmentsByAreaKitchen(
                            apartments,
                            Number(startAreaKitchen),
                            Number(endAreaKitchen)
                        );
                        break;
                    default:
                        throw new Error("There is no such a filter option provided");
                }
            }
        }

        if (sort !== 'all') {
            const [sortField] = sort.toString().split(":");

            if (VALID_SORT_FIELDS.includes(sortField as keyof IApartment)) {
                apartments = sortItems(apartments, sortField as keyof IApartment);
            }
        }

        return res.json(apartments);
    } catch (e: any) {
        console.log(`An error ${e} has occurred.`);
        return res.status(500).json({ error: e.message || "Internal Server Error" });
    }
};

export default getApartments;
