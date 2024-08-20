let student = {
    name: 'Carmen',
    age: 14,
    grade: 10,
    courses: ['biology', 'algebra', 'composition', 'ceramics'],
    gpa: 3.75,
};

function retrieveValue(student)
{
  for (let i = 0; i < student.courses.length; i++)
  {
    console.log(student.courses[i]);
  }
}

retrieveValue(student);
