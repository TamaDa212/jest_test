import fnc from "../src/index.js";


test('func_gt', () => {
  expect(fnc(1, 2)).toBe(false);
  expect(fnc(NaN, 2)).toBe(false)
})