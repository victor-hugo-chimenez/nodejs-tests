const sum = (a, b) => {
    const number1 = parseInt(a)
    const number2 = parseInt(b)

    if(Number.isNaN(number1) || Number.isNaN(number2)) {
        throw new Error('Please check your inputs')
    }
    return number1 + number2
}

module.exports = sum