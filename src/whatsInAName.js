const whatIsInName = (collection, source) => {
    const sourceKeys = Object.keys(source);
    return collection.filter((elementInCollection) => {
        return sourceKeys.every((keyInSource) => {
            return elementInCollection[keyInSource] === source[keyInSource];
        });
    });
};

module.exports = whatIsInName;
