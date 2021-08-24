#!/usr/bin/env node
const list = require('./list.json')

const getLongestWord = (letters) => {
    for (let i = 0, len = list.length; i < len; i++) {
        const word = list[i]
        const regex = new RegExp(`^[${letters}]+$`)
        if(regex.test(word)) return word
    }
    return ""
}

const letters = process.argv[2]

console.log(getLongestWord(letters))
