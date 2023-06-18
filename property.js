let button = document.getElementById("sliderIcon");
let buttonOne = document.getElementById("sliderIconOne");
let whole = document.getElementById("one");
let signbutton = document.getElementById("sign");
let inputContainer = document.getElementById("input");
let turnOut = document.getElementById("output");
const RegEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

const property = [
  {
    name: "Awesome Pecky",
    url:
      "https://becomeawritertoday.com/wp-content/uploads/2023/01/What-is-Business-Journalism.jpg",
  },

  {
    name: "Awesome Pecky",
    url:
      " https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production+Library/10-03-2022_Unsplash_social-media.jpg/image1170x530cropped.jpg",
  },

  {
    name: "Awesome Pecky",
    url:
      "https://images.theconversation.com/files/521104/original/file-20230414-16-d5o9p1.jpg?ixlib=rb-1.1.0&rect=0%2C981%2C8579%2C4282&q=45&auto=format&w=668&h=324&fit=crop",
  },
];

let count = 1;
let secondCount = 1;

buttonOne.addEventListener("click", (event) => {
  event.preventDefault();
  let randomArray = Math.floor(Math.random() * property.length);
  whole.src = property[randomArray].url;
});

button.addEventListener("click", (event) => {
  event.preventDefault();
  let randomArray = Math.floor(Math.random() * property.length);
  whole.src = property[randomArray].url;
});

signbutton.addEventListener("click", () => {
  if (inputContainer.value === "" || inputContainer.value === undefined) {
    turnOut.innerText = "Please provide us your Email";
    turnOut.style.color = "Red";
  } else if (!inputContainer.value.match(RegEmail)) {
    turnOut.innerText = "Please enter a Valid Email";
    turnOut.style.color = "Red";
  } else {
    turnOut.style.color = "Green";
    turnOut.innerText = "Thank you for Subscribing to our News Channel";
  }
});

// (inputContainer.value == inputContainer.type) {
//   return (turnOut.innerText = "Thank you for Subscribing");
// }
