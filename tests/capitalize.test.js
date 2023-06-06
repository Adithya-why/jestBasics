const { default: expect } = require('expect');
const capitalize = require('../scripts/capitalize');


test('caps first letter',()=>{
    expect(capitalize("john")).toMatch("John");
})

test('empty string',()=>{
    expect(capitalize("")).toMatch("Empty string");
})