const city = document.getElementById("city");
console.log("city: ", city);
const cityChoices = new Choices(city, {
  searchEnabled: false,
  itemSelectText: "",
});
