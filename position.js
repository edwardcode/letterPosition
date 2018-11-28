

function counterLetter(sentence){
  var object={};
  var letterSplitted = sentence.split('')


for (i=0; i<letterSplitted.length;i++){

  if (  object[letterSplitted[i] ]  === undefined){



   object[letterSplitted[i]]= [i];
   } else {
    object[letterSplitted[i]].push(i);
   }

  }
  return object;

}

console.log(counterLetter('lighthouse in the house'))


