//function 1
function getMaxDigit (number) {
  const arr = number.toString().split('');
  return Math.max(...arr);
}

console.log(getMaxDigit(9, 385));
  

//function 2
function power(base, exp){
    let result = 1;
    for(let i = 0; i <exp; i++)
    {
        result = result * base;
    }
    return(result);
}


//funcion 3
function formattingName(str) {
    if (!str) return false;
  
    return str[0].toUpperCase() + str.slice(1);
    
  }
  //function 4
  function sumPaymentOfTax(salery)
  {   
      const tax =19.5;
       const sum = salery-(salery *tax)/100;
      return sum;
  }

  //function 5
  function getRandomInt(min,max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
 // function 6
  function  repetitionLetter(letter,line){
      let count = 0;
   for (let i = 0; i < line.length; i++) {
        if(line[i] === letter){
          count++;
        }
       }
       return count;
     }
  



//function 7
function convertCurrency (string)  {
    const hrn= string.slice(string.length-3, string.length).toLowerCase();
    const dollar = string.slice(string.length-1, string.length);
    const uaCurrency = string.slice(0, string.length-3);
    const usaCurrency = string.slice(0, string.length-1);
      if (hrn === 'uah') {
        return (uaCurrency/25) + '$';
    } else if (dollar === '$') {
        return (usaCurrency*25) + 'грн.';
    } else {
        return "Error";
    }
}

convertCurrency("100$");

  //function 8
function gen_password(len){
    let password = "";
    let symbols = "12345678";
    for (var i = 0; i < len; i++){
        password += symbols.charAt(Math.floor(Math.random() * symbols.length));     
    }
    return password;
}
//function 9
function deleteLetters  (letter, word) {
    let result = '';
    for (let i = 0; i < word.length; i++) {
      if (word[i] !== letter) {
      result += word[i];
      }
    }
    return result;
  }
  console.log(deleteLetters('b', 'blablabla'))
  //function 10
function isPalyndrom(word)
{
	var wordLen = word.length,
        wordReverse = word.split('').reverse().join('');
    if (wordReverse == word) {
      return true;
    } else {
      return false;
    }
  }
console.log(isPalyndrom('Аргентина манит негра'))

  //function 11
  function deleteDuplicateLetter (string){
    string = string.toLowerCase();
    let result = '';
      for (let i = 0; i < string.length; i++) {
        if (string.indexOf(string[i]) === string.lastIndexOf(string[i])) {
          result += string[i];
        }
     }
   return result;
}

console.log(deleteDuplicateLetter('Бисквит был очень нежный'));

document.writeln(`<p> Function #1 - Gets any number and outputs the largest digit in that number:${getMaxDigit(9, 385)}</p>`);
document.writeln(`<p> Function #2 - Сalculates the degree of number::${power(2,10)}</p`);
document.writeln(`<p> Function #3 - Formats the name, makes the first letter of the capital :${formattingName('vlad')}</p`);
document.writeln(` <p> Function #4 - Calculates the amount remaining after paying the payroll tax:${sumPaymentOfTax(1000)}</p`);
document.writeln(` <p> Function #5 - Returns a random integer in the range N to M  : ${getRandomInt(2,10)} </p`);
document.writeln(`<p> Function #6 - Counts how many times a particular letter is repeated in a word:${repetitionLetter('а','Асталависта')}</p`);
document.writeln(`<p> Function #7 - Converting dollars to hryvnia and vice versa, depending on the presence of $ or UAH in the string:${convertCurrency('2500UAH')}</p`);
document.writeln(` <p> Function #8 - Random password generation (numbers only) :${gen_password(8)}</p`);
document.writeln(`<p> Function #9 - Removes all letters from the sentence : ${deleteLetters('b', 'blablabla')}</p>`);
document.writeln(`<p> Function #10 -Checks if the word is a palindrome:${isPalyndrom('мадам')} </p`);
document.writeln(`<p> Function #11 -Remove letters that occur more than 1 time from the sentence :${deleteDuplicateLetter('Бисквит был очень нежный')}</p`);
