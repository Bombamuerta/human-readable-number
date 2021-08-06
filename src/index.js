module.exports = function toReadable(n) {
    let first = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
    }

    let second = {
        1: "eleven",
        2: "twelve",
        3: "thirteen",
        4: "fourteen",
        5: "fifteen",
        6: "sixteen",
        7: "seventeen",
        8: "eighteen",
        9: "nineteen",
        0: "twenty",
    }

    let third = {
        1: "ten",
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    }

    let hundred = "hundred"

    if (n >= 0 && n <= 10) {
        return first[n]
    }

    if (n > 10 && n <= 20) {
        return second[n.toString()[1]]
    }

    if (n > 20 && n < 100) {
        if (n.toString()[1] === "0") {
            return third[n.toString()[0]]
        } else {
            return `${third[n.toString()[0]]} ${first[n.toString()[1]]}`
        }
    }

    if (n > 99 && n < 1000) {
        if (n.toString()[1] === "0" && n.toString()[2] === "0")
            return `${first[n.toString()[0]]} ${hundred}`
        if (n.toString()[1] === "0")
            return `${first[n.toString()[0]]} ${hundred} ${first[n.toString()[2]]}`
        if (n.toString()[1] === "1" && n.toString()[2] === "0")
            return `${first[n.toString()[0]]} ${hundred} ten`
        if (n.toString()[1] === "1")
            return `${first[n.toString()[0]]} ${hundred} ${second[n.toString()[2]]}`
        if (n.toString()[2] === "0")
            return `${first[n.toString()[0]]} ${hundred} ${third[n.toString()[1]]}`
        else
            return `${first[n.toString()[0]]} ${hundred} ${third[n.toString()[1]]} ${first[n.toString()[2]]}`
    }
}
