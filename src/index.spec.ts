import {parse} from './index'

describe('further-down', () => {

    it('parses links in the form of `[text](url)`: single', () => {
        const input  = '[text](http://test.com&foo)'
        const output = '<a href="http://test.com&foo">text</a>'
        expect(parse(input)).toBe(output)
    })

    it('parses links in the form of `[text](url)`: multiple', () => {
        const input  = 'beginning [at](au) middle [bt](bu) end'
        const output = 'beginning <a href="au">at</a> middle <a href="bu">bt</a> end'
        expect(parse(input)).toBe(output)
    })

    it('parses links in the form of `[text](url)`: multiline', () => {
        const input  = `beginning [at](au)
            middle
            [bt](bu) end`

        const output = `beginning <a href="au">at</a>
            middle
            <a href="bu">bt</a> end`

        expect(parse(input)).toBe(output)
    })

})