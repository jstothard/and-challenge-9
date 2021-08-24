### Longest word

You need node.js installed for this to work.

Clone the repo and install with `npm i`.

You can then run this by writing `node index` followed by the set of letters you wish to check. i.e. `node index hewsda` will return the longest word that can be created from that string, `deadheaded`.

## Optimisations

- sorted the list from longest to shortest before running
- stored list of words in json to reduce import line count



## The Challenge

You're typing out a message to a colleague on Slack when suddenly disaster strikes - you knock a cup of coffee all over your keyboard, rendering many of the keys inoperative. Given a list of keys on the keyboard which are still working, the challenge is to write a program which can determine the longest English-language word you can type using those letters. [A dictionary of words can be found here](http://norvig.com/ngrams/enable1.txt). Some key sets may have multiple solutions - returning the first is acceptable, although feel free to return a list of all solutions.
:five:  Points are awarded for a working solution
:three:  Points are awarded for a solution which takes under 1 second to return its result
:two:  Points are awarded for a solution in under 100 lines of code
Example:
Given the following letters:
`hewsda`
The expected output is:
`deadheaded` (or also `hasheeshes`)