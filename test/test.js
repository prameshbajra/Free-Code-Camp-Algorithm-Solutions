const assert = require('chai').assert;
const expect = require('chai').expect;

const whatsInAName = require('../src/whatsInAName');
const searchAndReplace = require('../src/searchAndReplace');
const translatePigLatin = require('../src/pigLatin');
const dnaPairing = require('../src/dnaPairing');
const missingLetters = require('../src/missingLetters');
const sortedUnion = require('../src/sortedUnion');
const convertHTML = require('../src/convertHtml');

describe('whatsInAName()', () => {
    it('should return [{ first: "Tybalt", last: "Capulet" }]', () => {
        const collection = [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }];
        const source = { last: "Capulet" };
        expect(whatsInAName(collection, source)).to.deep.equal([{ first: "Tybalt", last: "Capulet" }]);
    });

    it('should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }]', () => {
        const collection = [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }];
        const source = { "a": 1 };
        expect(whatsInAName(collection, source)).to.deep.equal([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }]);
    })

    it('should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }]', () => {
        const collection = [{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }];
        const source = { "a": 1, "b": 2 };
        expect(whatsInAName(collection, source)).to.deep.equal([{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }]);
    })

    it('should return [{ "a": 1, "b": 2, "c": 2 }]', () => {
        const collection = [{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }];
        const source = { "a": 1, "c": 2 };
        expect(whatsInAName(collection, source)).to.deep.equal([{ "a": 1, "b": 2, "c": 2 }]);
    })
});

describe('searchAndReplace()', () => {
    it("should return \"Let us go to the mall\"", () => {
        expect(searchAndReplace("Let us go to the store", "store", "mall")).to.equal('Let us go to the mall');
    });

    it("should return \"He is Sitting on the couch\"", () => {
        expect(searchAndReplace("He is Sleeping on the couch", "Sleeping", "sitting")).to.equal('He is Sitting on the couch');
    });

    it("should return \"This has a spelling error\"", () => {
        expect(searchAndReplace("This has a spellngi error", "spellngi", "spelling")).to.equal('This has a spelling error');
    });

    it("should return \"His name is John\"", () => {
        expect(searchAndReplace("His name is Tom", "Tom", "john")).to.equal('His name is John');
    });

    it("should return \"Let us get back to more Algorithms\"", () => {
        expect(searchAndReplace("Let us get back to more Coding", "Coding", "algorithms")).to.equal('Let us get back to more Algorithms');
    });
});

describe("pigLatin()", () => {
    it("Should return correct values accordingly", () => {
        expect(translatePigLatin("california")).to.equal("aliforniacay");
        expect(translatePigLatin("paragraphs")).to.equal("aragraphspay");
        expect(translatePigLatin("glove")).to.equal("oveglay");
        expect(translatePigLatin("algorithm")).to.equal("algorithmway");
        expect(translatePigLatin("eight")).to.equal("eightway");
    });
});

describe("dnaPairing()", () => {
    it('Should return correct values accordingly', () => {
        expect(dnaPairing("ATCGA")).to.deep.equal([["A", "T"], ["T", "A"], ["C", "G"], ["G", "C"], ["A", "T"]]);
        expect(dnaPairing("TTGAG")).to.deep.equal([["T", "A"], ["T", "A"], ["G", "C"], ["A", "T"], ["G", "C"]]);
        expect(dnaPairing("CTCTA")).to.deep.equal([["C", "G"], ["T", "A"], ["C", "G"], ["T", "A"], ["A", "T"]]);
    });
});

describe("missingLetters()", () => {
    it('Should return correct values accordingly', () => {
        expect(missingLetters("abce")).to.equal("d");
        expect(missingLetters("abcdefghjklmno")).to.deep.equal("i");
        expect(missingLetters("bcd")).to.equal(undefined);
        expect(missingLetters("yz")).to.equal(undefined);
    });
});

describe("sortedUnion()", () => {
    it('Should return correct values accordingly', () => {
        expect(sortedUnion([1, 3, 2], [5, 2, 1, 4], [2, 1])).to.deep.equal([1, 3, 2, 5, 4]);
        expect(sortedUnion([1, 3, 2], [1, [5]], [2, [4]])).to.deep.equal([1, 3, 2, [5], [4]]);
        expect(sortedUnion([1, 2, 3], [5, 2, 1])).to.deep.equal([1, 2, 3, 5]);
        expect(sortedUnion([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])).to.deep.equal([1, 2, 3, 5, 4, 6, 7, 8]);
    });
});

// For the test below the answers are correct but I cannot get string to equal comparasion ...

describe("convertHtml()", () => {
    it('Should return correct values accordingly', () => {
        expect(convertHTML("Hamburgers < Pizza < Tacos")).to.equal("Hamburgers &​lt; Pizza &​lt; Tacos");
        expect(convertHTML("Dolce & Gabbana")).to.equal("Dolce &​amp; Gabbana");
        expect(convertHTML("Sixty > twelve")).to.equal("Sixty &​gt; twelve");
        expect(convertHTML("Shindler's List")).to.equal("Shindler&​apos;s List");
        expect(convertHTML("<>")).to.equal("&lt;&​gt;");
        expect(convertHTML("abc")).to.equal("abc");
    });
});