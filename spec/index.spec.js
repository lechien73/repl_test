// CI Boilerplate code for DOM testing
// Opens the index.html file and attaches it to
// Jest's mock DOM

const $ = require('jquery');

beforeAll(() => {
    var fs = require("fs");
    // Change the filename here to the HTML file you're testing
    var newData = fs.readFileSync("./files/index.html", "utf-8");
    document.open();
    document.write(newData);
    document.close();
});

// Load script

describe('DOM tests', () => {

    test("Checks to see if the heading exists", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1);
    });

});