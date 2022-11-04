const {shuffleArray} = require('./utils')

let testArray1 = [1,2,3,4]
let testArray2 = ['watch', 'no', 'hands']
let testArray3 = []
let testArray4 = [{'name':'Bob'}, {'name':'Ben'}, {'name':'Bing'}, {'name':'Bill'}, {'name':'Brian'}]


describe('shuffleArray should', () => {
    test('return array', () => {
        expect(Array.isArray(shuffleArray(testArray1))).toBe(true)
        expect(Array.isArray(shuffleArray(testArray2))).toBe(true)
        expect(Array.isArray(shuffleArray(testArray3))).toBe(true)
        expect(Array.isArray(shuffleArray(testArray4))).toBe(true)
    }),
    test('array length', () => {
        expect(shuffleArray(testArray1)).toBe(testArray1.length)
        expect(shuffleArray(testArray2)).toBe(testArray2.length)
        expect(shuffleArray(testArray3)).toBe(testArray3.length)
        expect(shuffleArray(testArray4)).toBe(testArray4.length)
    })
})