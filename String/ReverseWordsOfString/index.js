function reverseWords(str){
// write code here
// use console.log to print output
    const words = str.split(' ');

  // Reverse each word in the array
  const reversedWords = words.map(word => word.split('').reverse().join(''));

  // Join the reversed words back into a sentence
  const reversedSentence = reversedWords.join(' ');
  console.log(reversedSentence);
}
