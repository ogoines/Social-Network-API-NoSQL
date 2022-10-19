const usernames = [
  'Aaran',
  'Aaren',
  'Aarez',
  'Priscilla',
  'Aaron',
  'Aaron-James',
  'Aarron',
  'Aaryan',
  'Eric',
  'Aayan',
  'Aazaan',
  'Abaan',
  'Abbas',
  'Abdallah',
  'Wyatt',
  'Abdihakim',
  'Adrian',
  'Abdisalam',
  'Abdul',
  'Abdul-Aziz',
  'Crystal',
  'Marsha',
  'Abdulkarem',
  'Smith',
  'Jones',
  'Strong',
  'Orsha',
  'Ze',
  'Zechariah',
  'Zeek',
  'Zeeshan',
  'Zeid',
  'Zein',
  'Zen',
  'Zendel',
  'Zack',
  'Zennon',
  'Zeph',
  'Zerah',
  'Zhen',
  'Zhi',
  'Crong',
  'Gracelyn',
  'Zi',
  'Sophia',
  'Jile',
  'Zinedine',
  'Zion',
  'Ziya',
  'Sebastian',
  'Zohaib',
  'Zohair',
  'Ruby',
  'Kayla',
  'Rolland',
  'Zuriel',
  'Xander',
  'Jared',
  'Courtney',
  'Gillian',
  'Clark',
  'Jared',
  'Grace',
  'Kelsey',
  'Tamar',
  'Alex',
  'Mark',
  'Tamar',
  'Farish',
  'Sarah',
  'Nathaniel',
  'Parker',
];

const emails = [
  'decision@gmail.com',
  'find@gmail.com',
  'pianoplayer@hotmail.com',
  'starbase@gmail.com',
  'towerdefense@gmail.com',
  'onopommo@gmail.com',
  'funnytrails@hotmail.com',
  'hellworld@yahoo.com',
  'stupidpeople@media.com',
  'noteworthy@notes.com',
  'message@mail.com',
  'email654@email.com',
  'happy@people.com',
  'firefox@fun.com',
  'running@yahoo.com',
  'cooking@hotmail.com',
  'poker123@email.com',
  'deliver@gmail.com',
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random username array
const getRandomUser = () =>
  `${getRandomArrItem(usernames)}`;

// Function to generate random assignments that we can add to student object.
const getRandomEmails = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      assignmentName: getRandomArrItem(emails)
      score: Math.floor(Math.random() * (99 - 70 + 1) + 70),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomUser, getRandomThoughts };
