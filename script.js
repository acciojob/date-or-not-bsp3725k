var isDate = function (input) {
  // If input is already a Date object, check if it is valid
  if (input instanceof Date) {
    return !isNaN(input.getTime()); // Check if the date is valid by checking the timestamp
  }

  // If the input is a string, try to parse it into a date
  const parsedDate = new Date(input);
  
  // Check if the parsed date is valid
  return !isNaN(parsedDate.getTime());
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
