// ===========================================================================

// Question 1:  Write a function, reverseWords(string), that that satisfies the following :


// Input: "Reverse all of the words in this string" 

// Output: "esreveR lla fo eht sdrow ni siht gnirts"

// ============================================================================

const reverseWords = (input) => {
    const output = input.split(' ').map((word) => {     //split up the string into an array of individual words and maps over that array
        return word.split('').reverse().join('')        //splits the individual words into their own little array reverses the word and rejoins the characters together
    }).join(' ')                                        //rejoins the entire sentence 

    console.log(output)                                 //console logging output for debugging purposes
    return output;                                      //returning output
}

reverseWords('Reverse all of the words in this string');