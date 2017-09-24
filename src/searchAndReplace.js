const myReplace = (str, before, after) => {
    const strArr = str.split(" ");
    let lol = "";
    let finalResult = "";
    let afterAll = "";
    if (/[A-Z]/.test(before[0])) {
        const s = after[0].toUpperCase();
        const afterArr = after.split("");
        afterArr.shift();
        afterArr.unshift(s);
        afterAll = afterArr.join();
        lol = afterAll.replace(/,/g, "");
    }
    const indexOfBefore = strArr.indexOf(before);
    strArr.splice(indexOfBefore, 1);
    strArr.splice(indexOfBefore, 0, lol || after);
    const result = strArr.join();
    finalResult = result.replace(/,/g, " ");
    return finalResult;
};

module.exports = myReplace;
