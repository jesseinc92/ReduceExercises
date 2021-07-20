// reduce functions
// extract value
function extractValue(array, key) {
    return array.reduce((acc, next) => {
        acc.push(next[key]);
        return acc;
    }, []);
}


// vowel count
function vowelCount(string) {
    let vowels = 'aeiou';
    return string.split('').reduce((acc, next) => {
        let lowerChar = next.toLowerCase();
        if (vowels.indexOf(lowerChar) !== -1) {
            if (acc[lowerChar]) {
                acc[lowerChar]++;
            } else {
                acc[lowerChar] = 1;
            }
        }
        return acc;
    }, {});
}


// add key and value
function addKeyAndValue(array, key, value) {
    return array.reduce((acc, next, i) => {
        acc[i][key] = value;
        return acc;
    }, array);
}


// partition
function partition(array, callback) {
    return array.reduce((acc, next, i) => {
        if (callback(next)) {
            acc[0].push(next);
        } else if (!callback(next)) {
            acc[1].push(next);
        }
        return acc;
    }, [[], []]);
}