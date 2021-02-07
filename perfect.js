function perfect(nbre){
 var tab = [];
 var sum = 0;
 for(var i = 1; i < nbre; i++){
   if(nbre % i === 0)
     tab.push(i);
 }
  for(var j = 0; j < tab.length; j++){
     sum = sum + tab[j];
  }
  if(sum === nbre)
     return true;
  return false;
}
perfect(496);
