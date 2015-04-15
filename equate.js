console.log(equate('2*2+2*3'));

function equate(inputString) {
  var pluses = inputString.split('+');
  var sum = 0;
  for (var i = 0; i < pluses.length; i++) {
    var mults = pluses[i].split('*');
    var product = 1;
    for (var j = 0; j < mults.length; j++) {
      product *= parseInt(mults[j]);
    }
    sum += product;
  }
  return sum;
}
