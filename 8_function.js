function extractLanguage(str1)
{
  let result;

  result = str1.split('_')[0];
  return (console.log(result));
}


extractLanguage('en_US.UTF-8');  // 'en'
extractLanguage('en_GB.UTF-8');  // 'en'
extractLanguage('ko_KR.UTF-16'); 
