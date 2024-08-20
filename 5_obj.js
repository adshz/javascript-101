let person = {
    title: 'Duke',
    name: 'Nukem',
    age: 33
};

// Expected output:
// // [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]

let nestedPerson = [];

for (let prop in person) {
  let elem = [];
  elem.push(prop);
  elem.push(person[prop]);
  nestedPerson.push(elem);
}

nestedPerson.forEach((ele) => console.log(ele));

