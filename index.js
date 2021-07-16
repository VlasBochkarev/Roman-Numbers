let arabicNumber = prompt("Input arabic number : ")
let romanNumber = " ";

  let M = 1000;
  let D = 500;
  let C = 100;
  let L = 50;
  let X = 10;
  let V = 5;
  let I = 1;
  
  if (arabicNumber >= 1 && arabicNumber <= 3999){
     while (arabicNumber > 0){
      if (arabicNumber - M >= 0) {
        arabicNumber -= M;
        romanNumber += "M";
        } else if (arabicNumber >= M - C) {
        arabicNumber -= M - C;
        romanNumber += "CM";
        } else if (arabicNumber - D >= 0) {
        arabicNumber -= D;
        romanNumber += "D";
        } else if (arabicNumber >= D - C) {
        arabicNumber -= D - C;
        romanNumber += "CD";
        } else if (arabicNumber - C >= 0) {
        arabicNumber -= C;
        romanNumber += "C";
        } else if (arabicNumber >= C - X) {
        arabicNumber -= C - X;
        romanNumber += "XC";
        } else if (arabicNumber - L >= 0) {
        arabicNumber -= L;
        romanNumber += "L";
        } else if (arabicNumber >= L - X) {
        arabicNumber -= L - X;
        romanNumber += "XL";
        } else if (arabicNumber - X >= 0) {
        arabicNumber -= X;
        romanNumber += "X";
        } else if (arabicNumber == X - I ) {
        arabicNumber -= X - I;
        romanNumber += "IX";
        } else if (arabicNumber - V >= 0) {
        arabicNumber -= V;
        romanNumber += "V";
        } else if (arabicNumber == V - I) {
        arabicNumber -= V - I;
        romanNumber += "IV";
        } else if (arabicNumber - I >= 0) {
        arabicNumber -= I;
        romanNumber += "I";
       } 
     }
     alert("Roman number :" +romanNumber) ;  
  }
  else {
    alert("Wrong Input !");
}


