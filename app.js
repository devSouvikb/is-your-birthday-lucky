const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputMessage = document.querySelector("#output-message");

function compareValues(sum, luckyNumber) {
  if (sum % luckyNumber === 0) {
    outputMessage.innerText = "Congrats! Your birthday is lucky";
  } else {
    outputMessage.innerText = "Your birthday is not so lucky";
  }
}

function checkBirthdayIsLucky() {
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  if (sum && dob) compareValues(sum, luckyNumber.value);
  else outputMessage.innerText = "Please fill both the fields";
}

function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
  }
  return sum;
}

checkNumberButton.addEventListener("click", checkBirthdayIsLucky);
