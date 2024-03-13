/**
 * expandAroundCenter Algo
 */
function expandAroundCenter(s, left , right) {

    while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
      left--;
      right++;
    }
    return s.substr(left + 1, right - left - 1);
  }

  const longestPallindrome = (s) => {

    if (!s.length)
    return ""

    let longest = ""
    for(let i=0; i<s.length; i++){
        let oddPallindrome = expandAroundCenter(s,i,i)
        //console.log(`oddd : ${oddPallindrome}`)
        let evenPallindrome = expandAroundCenter(s,i,i+1)
       // console.log(`even : ${evenPallindrome}`)
        if (oddPallindrome.length > longest.length) {
        longest = oddPallindrome;
      }
      if (evenPallindrome.length > longest.length) {
        longest = evenPallindrome;
      }
       // console.log(`longest : ${longest}`)
    }

    return longest
  }

  console.log(longestPallindrome("babad"))