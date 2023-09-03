let userFirstName = prompt("Enter your first name:").trim();
let userLastName = prompt("Enter your last name:").trim();
let userEmail = prompt("Enter your email:").replace(/\s/g, "").toLowerCase();
let userBirthday = Number(prompt("Enter your year of birth:").replace(/\s/g, ""));

const tagResult = document.querySelector('.survay');

let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let userCurrentAge = currentYear - userBirthday;

if (userFirstName === "" || userLastName === "" || userEmail === "" || userBirthday === "") {
  alert("You have entered an empty string or not a valid value");
} else if (!userEmail.includes("@")) {
  userEmail = `not valid email <b>${userEmail}</b> (symbol @ not exist)`;
} else if (userEmail.indexOf("@") === 0) {
  userEmail = `not valid email <b>${userEmail}</b> (symbol @ find in first place)`;
} else if (userEmail.indexOf("@") === userEmail.length - 1) {
  userEmail = `not valid email <b>${userEmail}</b> (symbol @ find in last place)`;
} else {
  tagResult.innerHTML =
    `Full name: ${userFirstName} ${userLastName}` + "<br>" +
    `Email: ${userEmail}` + "<br>" +
    `Age: ${userCurrentAge}`;
}

tagResult.innerHTML =
  `Full name: ${userFirstName} ${userLastName}` + "<br>" +
  `Email: ${userEmail}` + "<br>" +
  `Age: ${userCurrentAge}`;