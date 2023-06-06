const { default: expect } = require("expect");
const reverseStr = require("../scripts/reverseStr");


test("reverse",()=>{
    expect(reverseStr("abc")).toMatch("cba");
});