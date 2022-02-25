const queryString = require('./querystring')

describe('Object to query string', () => {
    test('should create a query string when an object is provided', () => {
        const object = {
            name: 'foo',
            profession: 'developer'
        }

        expect(queryString(object)).toBe('name=foo&profession=developer')
        
    })
})