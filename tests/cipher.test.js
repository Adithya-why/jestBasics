const { default: expect } = require("expect");
const cipher = require("../scripts/cipher");



test("wrapping",()=>{
    expect(cipher("z",1)).toMatch("a");
})


test("case",()=>{
    expect(cipher("A",1)).toMatch("B");
})


test("special symbols",()=>{
    expect(cipher("abc !!",1)).toMatch("bcd !!");
})