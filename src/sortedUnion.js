module.exports = (...arr) => {
    const ss = new Set();
    arr.map((value) => {
        return value.map((val) => {
            return ss.add(val);
        });
    });
    let newArr = [];
    newArr = Array.from(ss);
    return newArr;
};

