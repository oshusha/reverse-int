module.exports = function reverse (n) {
    return parseInt(new String(n).split('').reverse().join(''), 10);
}
