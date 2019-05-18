let input = 'turpentine and turtles';
let vowels = ['E','U','A','I','O'];
let resultArray = [];
input = input.toUpperCase();
// first loop iterates throgh input characters
for (let i = 0 ; i < input.length ; i++){
  for (let j = 0 ; j < vowels.length ; j++){
    if (input[i] === vowels[j]){
      resultArray.push(input[i]);
      if (input[i] === 'E' || input[i] === 'U')
        resultArray.push(input[i]);
    }
  }
}
console.log(resultArray.join(''));
