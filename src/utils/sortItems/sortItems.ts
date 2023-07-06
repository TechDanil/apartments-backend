const sortItem = <T>(itemPropery: keyof T) => {
    return (a: T, b: T) => {
        if (a[itemPropery] < b[itemPropery]) {
            return -1;
        }

        if (a[itemPropery] > b[itemPropery]) {
            return 1;
        }
        
        return 0;
    }
}

const sortItems = <T>(items: T[], itemPropery: keyof T): T[] => {
    return items.sort(sortItem<T>(itemPropery));
}

export default sortItems;