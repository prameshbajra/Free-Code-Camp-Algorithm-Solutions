
module.exports = (str) => {
    const first = str.charCodeAt(0);
    const last = str.charCodeAt(str.length - 1);
    let j = 0;
    for (let i = first; i <= last; i += 1) {
        if (String.fromCharCode(i) !== str[j]) {
            return String.fromCharCode(i);
        }
        j += 1;
    }
    return undefined;
};

