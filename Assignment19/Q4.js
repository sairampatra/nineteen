function extractDateParts(pattern, str) {
    let regex = new RegExp(pattern);
    let match = regex.exec(str);
    if (match) {
        return {
            fullMatch: match[0],
            day: match[1],
            month: match[2],
            year: match[3]
        };
    } else {
        return null;
    }
}

let pattern = '(\\d{2})-(\\d{2})-(\\d{4})'; // Matches dates in DD-MM-YYYY format
let str = 'Today is 25-12-2024, Merry Christmas!';

console.log(extractDateParts(pattern, str));
