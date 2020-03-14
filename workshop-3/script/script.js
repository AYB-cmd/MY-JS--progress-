

function convert() {
 var x = "";
 var y = 120;
  
  while ( y > 0) {
      x +=y % 2; 
      y = Math.floor(y / 2);
    
  };
  x = x.split("").reverse();
  return x
};

console.log(convert());