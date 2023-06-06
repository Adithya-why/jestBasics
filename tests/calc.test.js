const { default: expect } = require('expect');
const calc = require('../scripts/calc');


test("add",()=>{
    expect(calc().add(1,2)).toBe(3);
})

test("Sub",()=>{
    expect(calc().sub(3,1)).toBe(2);
})


test("mul",()=>{
    expect(calc().mul(3,5)).toBe(15);
})


test("div",()=>{
    expect(calc().div(9,3)).toBe(3);
})






