//! Start by creating the variables for the data recorded

const day1TempF = 32
const day2TempC = 25
const day3TempF = 70
const day4TempC = 18
const day5TempF = 80
const day6TempC = 15
const day7TempF = 72
const day8TempC = 28
const day9TempF = 68
const day10TempC = 20
const day11TempF = 75
const day12TempC = 23
const day13TempF = 82
const day14TempC = 30
const day15TempF = 65
const day16TempC = 22
const day17TempF = 77
const day18TempC = 26
const day19TempF = 78
const day20TempC = 24
const day21TempF = 73
const day22TempC = 21
const day23TempF = 79
const day24TempC = 27
const day25TempF = 71
const day26TempC = 19
const day27TempF = 74
const day28TempC = 17
const day29TempF = 76
const day30TempC = 29

const day1TempC = calculateCelsius(day1TempF)
const day2TempF = calculateFahrenheit(day2TempC)
const day3TempC = calculateCelsius(day3TempF)
const day4TempF = calculateFahrenheit(day4TempC)
const day5TempC = calculateCelsius(day5TempF)
const day6TempF = calculateFahrenheit(day6TempC)
const day7TempC = calculateCelsius(day7TempF)
const day8TempF = calculateFahrenheit(day8TempC)
const day9TempC = calculateCelsius(day9TempF)
const day10TempF = calculateFahrenheit(day10TempC)
const day11TempC = calculateCelsius(day11TempF)
const day12TempF = calculateFahrenheit(day12TempC)
const day13TempC = calculateCelsius(day13TempF)
const day14TempF = calculateFahrenheit(day14TempC)
const day15TempC = calculateCelsius(day15TempF)
const day16TempF = calculateFahrenheit(day16TempC)
const day17TempC = calculateCelsius(day17TempF)
const day18TempF = calculateFahrenheit(day18TempC)
const day19TempC = calculateCelsius(day19TempF)
const day20TempF = calculateFahrenheit(day20TempC)
const day21TempC = calculateCelsius(day21TempF)
const day22TempF = calculateFahrenheit(day22TempC)
const day23TempC = calculateCelsius(day23TempF)
const day24TempF = calculateFahrenheit(day24TempC)
const day25TempC = calculateCelsius(day25TempF)
const day26TempF = calculateFahrenheit(day26TempC)
const day27TempC = calculateCelsius(day27TempF)
const day28TempF = calculateFahrenheit(day28TempC)
const day29TempC = calculateCelsius(day29TempF)
const day30TempF = calculateFahrenheit(day30TempC)



//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)

// Formula to pass from F to C:
function calculateCelsius(tempInFahrenheit) {
    const result = (tempInFahrenheit - 32) * 5 / 9
    return result
}

// Formula to pass from C to F:
function calculateFahrenheit(tempInCelsius) {
    const result = (tempInCelsius * 9 / 5) + 32
    return result
}


//! Start the calculation of the total temperatures

// Calculate total temp in fahrenheit
const tot_temperature_in_fahrenheit = day1TempF +
    day3TempF +
    day5TempF +
    day7TempF +
    day9TempF +
    day11TempF +
    day13TempF +
    day15TempF +
    day17TempF +
    day19TempF +
    day21TempF +
    day23TempF +
    day25TempF +
    day27TempF +
    day29TempF +
    day2TempF +
    day4TempF +
    day6TempF +
    day8TempF +
    day10TempF +
    day12TempF +
    day14TempF +
    day16TempF +
    day18TempF +
    day20TempF +
    day22TempF +
    day24TempF +
    day26TempF +
    day28TempF +
    day30TempF

const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit/30


// Calculate total temp in fahrenheit
const tot_temperature_in_celsius = day2TempC +
    day4TempC +
    day6TempC +
    day8TempC +
    day10TempC +
    day12TempC +
    day14TempC +
    day16TempC +
    day18TempC +
    day20TempC +
    day22TempC +
    day24TempC +
    day26TempC +
    day28TempC +
    day30TempC +
    day1TempC +
    day3TempC +
    day5TempC +
    day7TempC +
    day9TempC +
    day11TempC +
    day13TempC +
    day15TempC +
    day17TempC +
    day19TempC +
    day21TempC +
    day23TempC +
    day25TempC +
    day27TempC +
    day29TempC

const avg_temperature_in_celsius = tot_temperature_in_celsius/30


//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
    tot_temperature_in_fahrenheit,
    tot_temperature_in_celsius,
    avg_temperature_in_fahrenheit,
    avg_temperature_in_celsius
};