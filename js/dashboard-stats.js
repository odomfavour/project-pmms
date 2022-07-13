let days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = new Date();

// To get the date formated
let dateFormatText = document.querySelector("#date-format");
let dateFormatted = (day.toLocaleDateString("en-US"));
console.log(dateFormatted)
dateFormatText.textContent= dateFormatted;

// To get the Day of the week to show in the UI
day = day.getDay(toString)
let daysName = days[day]
console.log(daysName)
let dateName = document.querySelector("#date-name");
dateName.textContent = daysName;



