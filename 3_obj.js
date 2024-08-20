let jane = {
    firstName: 'Jane',
    lastName: 'Harrelson',
    age: 32,
    location: {
          country: 'Denmark',
          city: 'Aarhus'
        },
    occupation: 'engineer',
    greet(str){
      console.log("Hey, " + str);
    }
 };
jane.greet('Bobby'); // Hey, Bobby!
  //

