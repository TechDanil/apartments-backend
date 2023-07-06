import IApartment from '../../interfaces/apartmentInterfaces/IApartment.interface';
import getFilteredItems from '../../utils/getFilteredItems/getFilteredItems';
import IAreaTotalFilter from '../../interfaces/apartmentInterfaces/IAreaTotalFilter.interface';
import IFloorsFilter from '../../interfaces/apartmentInterfaces/IFloorFilter.intarface';
import IRoomsFilter from '../../interfaces/apartmentInterfaces/IRoomsFilter.interface';
import IPriceFilter from '../../interfaces/apartmentInterfaces/IPriceFilterInterface.interface';
import IAreaKitchenFilter from '../../interfaces/apartmentInterfaces/IAreaKitchenFilter.interface';
import IAreaLiveFilter from '../../interfaces/apartmentInterfaces/IAreaLiveFilter.interface';
import IApartmentFloorPosition from '../../interfaces/apartmentInterfaces/IApartmentFloorPosition.interface';

const getFilteredApartmentsByFloors = (
  apartments: IApartment[],
  floor: number
) => {
  const filter: IFloorsFilter = {
    floor: floor,
  };

  return getFilteredItems<IApartment>(
    (item: IApartment) =>
      item.floor === filter.floor,
    'Error while filtering price'
  )(apartments);
};

const getFilteredApartmentsByPrice = (
  apartments: IApartment[],
  startPrice: number,
  endPrice: number
) : IApartment[] => {
  const filter: IPriceFilter = {
    startPrice: startPrice,
    endPrice: endPrice,
  };

  return getFilteredItems<IApartment>(
    (item: IApartment) =>
      item.price >= filter.startPrice && item.price <= filter.endPrice,
    'Error while filtering price'
  )(apartments);
};

const getFilteredApartmentsByRooms = (
  apartments: IApartment[],
  rooms: number
) => {
  const filter: IRoomsFilter = {
    rooms: rooms,
  };

  return getFilteredItems<IApartment>(
    (item: IApartment) =>
      item.rooms === filter.rooms,
    'Error while filtering rooms'
  )(apartments);
};

const getFilteredApartmentsByAreaTotal = (
  apartments: IApartment[],
  startAreaTotal: number,
  endAreaTotal: number
) => {
  const filter: IAreaTotalFilter = {
    startAreaTotal: startAreaTotal,
    endAreaTotal: endAreaTotal,
  };

  return getFilteredItems<IApartment>(
    (item: IApartment) =>
      item.area_total >= filter.startAreaTotal && item.area_total <= filter.endAreaTotal,
    'Error message while filtering area total'
  )(apartments);
};

const getApartmentsByFloorPosition = (
  apartments: IApartment[],
  pos_on_floor: number
) => {
  const filter: IApartmentFloorPosition = {
    pos_on_floor: pos_on_floor,
  };

  return getFilteredItems<IApartment>(
    (item: IApartment) =>
      item.pos_on_floor === filter.pos_on_floor,
    'Error while filtering floor position'
  )(apartments);
};

const getFilteredApartmentsByAreaKitchen = (
  apartments: IApartment[],
  startAreaKitchen: number,
  endAreaKitchen: number
) => {

  const filter: IAreaKitchenFilter = {
    startAreaKitchen: startAreaKitchen,
    endAreaKitchen: endAreaKitchen,
  };

  return getFilteredItems<IApartment>(
    (item: IApartment) =>
      item.area_kitchen >= filter.startAreaKitchen && item.area_kitchen <= filter.endAreaKitchen,
    'Error while filtering area kitchen'
  )(apartments);
};

const getFilteredApartmentsByAreaLive = (
  apartments: IApartment[],
  startAreaLive: number,
  endAreaLive: number
) => {
  const filter: IAreaLiveFilter = {
    startAreaLive: startAreaLive,
    endAreaLive: endAreaLive,
  };

  return getFilteredItems<IApartment>(
    (item: IApartment) =>
      item.area_live >= filter.startAreaLive && item.area_live <= filter.endAreaLive,
    'Error while filtering area live'
  )(apartments);
};

export {
  getFilteredApartmentsByAreaKitchen,
  getFilteredApartmentsByAreaLive,
  getFilteredApartmentsByAreaTotal,
  getFilteredApartmentsByFloors,
  getFilteredApartmentsByPrice,
  getFilteredApartmentsByRooms,
  getApartmentsByFloorPosition,
};
