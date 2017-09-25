module.exports = (str) => {
    const mp = new Map();
    mp.set("C", "G");
    mp.set("G", "C");
    mp.set("A", "T");
    mp.set("T", "A");

    const splittedString = str.split("");
    const resultArray = splittedString.map((elem) => {
        return [elem, mp.get(elem)];
    });
    return resultArray;
};
