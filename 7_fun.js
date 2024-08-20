function catAge(catYears)
{
  let humanAge = 0;

  if (catYears == 0)
    humanAge = 0;
  else if (catYears == 1)
    humanAge = 15;
  else if (catYears == 2)
    humanAge = 24;
  else if (catYears > 2)
  {
    humanAge = 24;
    humanAge += 4 * (catYears - 2)
  }
  
  if (humanAge > 150)
    return ("It may not be possible for now");
  return (humanAge);
}
/*
 0
 15
24
28
32
56
88
48
72
68
76
84

 */
console.log(catAge(0));
console.log(catAge(1));
console.log(catAge(2));
console.log(catAge(3));
console.log(catAge(4));
console.log(catAge(10));


console.log(catAge(18));
console.log(catAge(8));
console.log(catAge(14));
console.log(catAge(13));
console.log(catAge(15));
console.log(catAge(17));
