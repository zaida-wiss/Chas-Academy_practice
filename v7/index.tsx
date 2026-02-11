/*
function processUser(user: {
id: string,
name: string,
email: string,
age: number,
address: (street: string, city: string }
)) {
// Gör något med datan
)
*/

interface User {
  id: string;
  name: string;
  email: string;
  age?: number;
  } {
    //Gör något med datan
  }

function processUser(user: {
  id: string;
  name: string;
  email: string;
  age?: number;
}) {
  //Gör något med datan
}

function logoutUser (user: {
  id: string;
  name: string;
  email: string;
  age?: number;
}) {
  //Gör något med datan
}


  const user1: User = {
    id: "1",
    name: "Anna Andersson",
    email: "anna@chas.se",
    age: 30sju,
  };

  processUser(user1);
  logoutUser(user1);