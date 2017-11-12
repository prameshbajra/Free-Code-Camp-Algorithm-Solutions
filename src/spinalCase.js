module.exports = (str) => {
    let newStr = str.replace(/_| |-/g, "-");
    let strArr = newStr.split("");
    let newArr = [];
    newArr.push(strArr[0]);
    for (let i = 1; i < strArr.length; i++) {
        if (strArr[i] === strArr[i].toUpperCase()) {
            newArr.push("-");
        }
        newArr.push(strArr[i]);
    }
    return newArr.join().toLowerCase().replace(/,/g, "").replace(/[-]+/g, "-");
}





