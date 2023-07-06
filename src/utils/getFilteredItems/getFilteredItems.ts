const getFilteredItems = <T>(
    filter: (item: T) => boolean,
    errorMessage: string
) => {
    return (items: T[]): T[] => {
      return items.filter((item: T) => filter(item));
    };
};
  

export default getFilteredItems;