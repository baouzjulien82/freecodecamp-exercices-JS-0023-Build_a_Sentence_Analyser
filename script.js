// *********************** Première partie, compter les voyelles d'une phrase ***********************
// Version initiale

const getVowelCount = (sentence) => {
  let vowelCount = 0;
  let vowel = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < sentence.length; i++) {
    for (let letter of vowel){
      if(letter === sentence[i].toLowerCase()){
        vowelCount++;
      }
    }
  }
  return vowelCount;
};

// Version Améliorée

const getVowelCount = (sentence) => {
  const vowels = ["a", "e", "i", "o", "u"]; // pas de "y"
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
};
