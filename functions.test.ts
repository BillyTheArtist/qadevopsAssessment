const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('shuffle test', () => {
        expect(shuffleArray()).toBe([])
    }),
    test('array length', () => {
        expect(shuffleArray.length).toBe(shuffleArray.length)
    })
})