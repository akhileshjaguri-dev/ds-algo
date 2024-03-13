const permute = (str, l, r, result) => {
    if (l === r) {
        result.push(str.join(''));
    } else {
        for (let i = l; i <= r; i++) {
            [str[l], str[i]] = [str[i], str[l]]; // Swap characters using destructuring assignment
            permute(str.slice(), l + 1, r, result); // Recursively permute the substring
        }
    }

};

const stringPermutation = (input) => {
 let result = [];
 permute(input.split(''), 0, input.length - 1, result)
 return result
};


console.log(stringPermutation("abc"))