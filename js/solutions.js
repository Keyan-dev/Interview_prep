class ProgramSolutions {
    ReverseString(str) {
        let reverseString = '';
        for (let i = str.length; i >= 0; i--) {
            reverseString += str.charAt(i);
        }
        return reverseString;
    }
    ReverseString2(str) {
        for (let i = str.length; i >= 0; i--)
            str += str.charAt(i);
        return str.slice(Math.ceil(str.length / 2), str.length);
    }
    checkPalindrome(str) {
        let l = 0, r = str.length - 1;
        while (l <= r) {
            if (str.charAt(l).toLowerCase() == str.charAt(r).toLowerCase()) {
                l++;
                r--;
            }
            else {
                return false;
            }
        }
        return true;
    }
    countVowelsConsonents(str) {
        let count = { vowels: 0, consonent: 0 };
        for (let i = 0; i < str.length; i++) {
            if (['a', 'e', 'i', 'o', 'u'].includes(str.charAt(i).toLowerCase())) {
                count['vowels']++;
            }
            else {
                count['consonent']++;
            }
        }
        return count;
    }
}


const program = new ProgramSolutions();
console.log(program.ReverseString2('test'));
console.log(program.checkPalindrome('abaaba'));
console.log(program.countVowelsConsonents('test'));