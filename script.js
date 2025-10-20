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
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
};

// *********************** Seconde partie, compter les consonnes d'une phrase ***********************
// Version initiale

function getConsonantCount(sentence) {
  const vowels = "aeiou";
  let count2 = 0;

  for (const char of sentence.toLowerCase()) {
    if (!vowels.includes(char) && char >= 'a' && char <= 'z') { // char >=a et <= z pour ignorer les espaces et autre types de charactères
      count2++;
    }
  }
  return count2;
}

const consoneCount = getConsonantCount("Coding is fun");
console.log(`Consone Count: ${consoneCount}`);

// *********************** Troisième partie, compter la ponctuation ***********************
// Version initiale

const getPunctuationCount = (sentence) => {
  let punctuationCount = 0;
  for (const char of sentence) {
    if(!/[a-zA-Z ]/.test(char)) {
      punctuationCount++;
    }
  }
  return punctuationCount;
};

// *********************** Quatrième partie, compter les mots dans une phrase ***********************
// Version initiale

