

var nmr = prompt("entre your phone number (2126********) :");
var output = [];

for (var i = 0, len = nmr.length; i < len; i++) {
    output.push(+nmr.charAt(i))
};

output = "(+" + output[0] + output[1] + output[2] + ") " + output[3] + output[4] + output[5] + output[6] + "-" + output[7] + output[8] + output[9] + output[10] + output[11] 

console.log(output);






