const translatePigLatin = (str) => {
    if (/a|e|i|o|u/.test(str[0])) {
        return str + "way";
    }
    let strArr = str.split("");
    let index = findIndex(strArr);
    for (let i = 0; i < index; i++) {
        strArr.push(strArr.shift());
    }
    let res = strArr.join();
    let finalRes = res.replace(/,/g, '');
    return finalRes + "ay";
}

function findIndex(strArr) {
    for (let i = 0; i < strArr.length; i++) {
        if (/a|e|i|o|u/.test(strArr[i])) {
            return i;
        }
    }
}

module.exports = translatePigLatin;