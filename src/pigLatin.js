const findIndex = (strArr) => {
    for (let i = 0; i < strArr.length; i += 1) {
        if (/a|e|i|o|u/.test(strArr[i])) {
            return i;
        }
    }
};

const translatePigLatin = (str) => {
    if (/a|e|i|o|u/.test(str[0])) {
        return `${str}way`;
    }
    const strArr = str.split("");
    const index = findIndex(strArr);
    for (let i = 0; i < index; i += 1) {
        strArr.push(strArr.shift());
    }
    const res = strArr.join();
    const finalRes = res.replace(/,/g, "");
    return `${finalRes}ay`;
};


module.exports = translatePigLatin;
