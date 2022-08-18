/*const arr = [1, 2, 3, 4, 5];

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (const num of arr) {
  console.log(num);
}

arr.forEach((num) => {
  console.log(num)
});*/

// Object 
/*var personObj = {
  firstName: 'Sanjay',
  lastName: 'Saravanan',
  DOB: 'yyyy-mm-dd',
  role: 'developer',
  age: 'xx',
  location: 'chennai',
  nationality: 'india',
  skills: ['JS', 'Python', 'C++'],
  projects: [
    { name: 'RC Toy CAR', langs: ['Python', 'JS'] },
    { name: 'Hotel Booking Application', lang: ["JS", 'Python'] }
  ]
}*/

var MyResumeObj = {

  ProfileSummary: ": Experienced Software Devloper",
  FirstName: ': Maheswari',
  LastName: ': Dineshraja',
  //Persons Details
  PersonalParticulars: {  
          DOB:'31-05-1985',
          Email:'mageshbe2003@yahoo.co.in',
          PhoneNumber:6512345678,
          Age: '37',
          Location: 
          {"Street Name": "Jurong West",
          "Postal Code": 666666,
          "Country": "Singapore"},
          Nationality: 'Singaporean'
    },
  // Past work Experience
  Experience: [
          { Company: 'NETS', Position: 'software developer', Years: 5 },
          { Company: 'NCS', Position: 'senior software developer', Years: 1 }
    ],
  //Education details
  EducationalQualifications: { 
            "Master Of Science": "Nanyang Technological University, Singapore",
            "Bachelor of Engg": "Anna University , India",
    },
  // Skills
  skills: ['C', 'C++', 'JAVA', 'SQL'],
  
  LanguagesKnown: ["Tamil", "English" ],

  PersonalHobbies: ["YouTuber", "knitting"]
}

Object.keys(MyResumeObj).forEach((x) => console.log(x, MyResumeObj[x]));