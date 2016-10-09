var display = document.getElementById('result');

var english = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n'
               ,'o','p','q','r','s','t','u','v','w','x','y','z',' '];
var morse = ['.-', '...-', '.-.-', '..-','.','.-..','.--','....','..','---.'
             ,'-.-','..-.','--','.-','---','.--.','-.--','.-.','...','-','-..'
             ,'-...','--.','-..-','--.-','..--',' '];

var toConvert = prompt("Enter phrase to convert");
var converted = "";
for(var i = 0; i < toConvert.length; i++)
{
  var letter = toConvert.charAt(i);
  for(var j = 0; j < english.length; j++){
    if(letter == english[j]){
      converted += morse[j]; + " "
    }
  }
}
display.innerHTML = converted;
