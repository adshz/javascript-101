let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

let person = {};
for (let element in nestedArray)
{

  person[nestedArray[element][0]] = nestedArray[element][1] ;
  
}

console.log(person);
