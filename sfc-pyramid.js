var sfcpyramid=function(n){
  var message="";
  var counter = 0;
  while (counter < n){
    message=message+"sfc";
    counter =counter+1
  }
  return message;
};
var output;
var number =1;
while (number<=5){
  output=sfcpyramid(number);
  console.log(output);
  number =number+1
}
/*
6
*/