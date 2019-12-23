import { getFirstName, isValidPassword } from '../src/utils/user.js'

test('Should return first name when given full name', () => {
    const firstName = getFirstName('Luke John')

    expect(firstName).toBe('Luke')
})

test('Should return first name when given first name', () => {
    const firstName = getFirstName('Jen')

    expect(firstName).toBe('Jen')
})

test('Should reject password short than 8 characters', () => {
    const password = isValidPassword('donald1')

    expect(password).toBe(false)
})

test('Should reject password that contains word password', () => {
    const password = isValidPassword('password12345')

    expect(password).toBe(false)
})

test('Should correctly validate a valid password', () => {
    const password=isValidPassword('hello123456')

    expect(password).toBe(true)
})