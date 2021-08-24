const list = require('./list.json')
const getLongestWord = (letters) => {
    for (let i = 0, len = list.length; i < len; i++) {
        if(RegExp(`^[${letters}]+$`).test(list[i])) return list[i]
    }
}
const letters = process.argv[2]||""
console.log(getLongestWord(letters))
