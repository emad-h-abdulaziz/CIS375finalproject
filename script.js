var slider = document.getElementById("sliderRange");
var sliderValueSpan = document.getElementById("sliderValue");
var generateArrayBtn = document.getElementById("generateArrayBtn");
var randomGeneratedArray = document.getElementById("randomArray");
var directions = document.getElementById("directions");
var directionsImage = document.getElementById("directionsImage");
var directionsText = document.getElementById("directionsText");
var directionsVisible = false;

sliderValueSpan.innerHTML =  "Selected array size: " + slider.value;

slider.oninput = function() {
  sliderValueSpan.innerHTML =  "Selected array size: " + this.value;
}
/*generate random array when clicked based on slider value */
generateArrayBtn.addEventListener("click", function() {
  var arraySize = parseInt(slider.value);
  var randomArray = generateRandomArray(arraySize);
  randomGeneratedArray.innerHTML = "Unsorted Array: " + randomArray.join(", ");
});

function generateRandomArray(size) {
  var arr = [];
  for (var i = 0; i < size; i++) {
    arr.push(Math.floor(Math.random() * 20));
  }
  return arr;
}

var directionsImage = document.getElementById("directionsImage");
var directionsVisible = false;

/*show directions if question mark is clicked */
directionsImage.addEventListener("click", function() {
    if (!directionsVisible) {
      directionsImage.style.display = "none";
      directionsText.innerHTML = "Click and drag the slider to select the size of an array. Click 'Generate Random Array' to generate a random array of the selected size. Use the start and stop buttons to control sorting.";
      directionsVisible = true;
    }
  });

  /*hide question mark if directions is clicked */
  directionsText.addEventListener("click", function() {
    if (directionsVisible) {
      directionsImage.style.display = "block"; 
      directionsText.innerHTML = ""; 
      directionsVisible = false;
    }
  });