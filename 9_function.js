function localGreet(str1)
{
  let result;

  result = str1.substring(3, 5);
  switch (result)
  {
    case 'US':
      console.log('Hey!');
    case 'GB':
      console.log('Hello!');
    case 'AU':
      console.log('Howdy!');
    case 'FR' || 'CA' || 'MA':
      console.log('Salut');
  }
}

localGreet('fr_FR.UTF-8'); // 'Salut!'
localGreet('fr_CA.UTF-8'); // 'Salut!'
localGreet('fr_MA.UTF-8'); // 'Salut!'
localGreet('en_US.UTF-8'); // 'Hey!'
localGreet('en_GB.UTF-8'); // 'Hello!'
localGreet('en_AU.UTF-8'); // 'Howdy!'
